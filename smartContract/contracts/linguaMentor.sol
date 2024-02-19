// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import {MentorContract} from "contracts/mentorContract.sol";
import {linguaCCIP} from "contracts/linguaCCIP.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LinguaMentor is MentorContract, linguaCCIP {
    IERC20 USDc;

    struct MentorshipSessionWithFee {
        address mentor;
        address mentee;
        uint256 timestamp;
        uint256 sessionFee;
        bool isAccepted;
    }

    struct MentorshipRequestStatus {
        address mentor;
        address mentee; // Add this line to store mentee's address
        uint256 timestamp;
        bool isAccepted;
    }

    mapping(address => mapping(address => MentorshipSessionWithFee)) mentorshipSessionsWithFee;
    mapping(address => MentorshipSessionWithFee[]) mentorshipRequests;
    mapping(address => MentorshipRequestStatus[]) mentorshipRequestStatus; // New mapping to store request status

    event NewMentorshipSession(
        address indexed mentor,
        address indexed mentee,
        uint256 timestamp
    );
    event SessionFeeTransferred(
        address indexed payer,
        address indexed mentor,
        uint256 fee
    );
    event MentorshipAccepted(address, address _mentee);

    modifier onlyRegisteredUser() {
        require(
            mentee[msg.sender].addr != address(0),
            "User is not registered"
        );
        _;
    }

    constructor(address _router, address _link) linguaCCIP(_router, _link) {
        USDc = IERC20(0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238);
    }

    function getERC20Balance() external view returns (uint256) {
        // Use the balanceOf function to retrieve the balance for the specified account
        return USDc.balanceOf(address(this));
    }

    // This function is to be called by the mentee
    function registerStudent(
        string memory _preferredLanguage,
        uint256 _proficiencyLevel
    ) public {
        registerMentee(_preferredLanguage, _proficiencyLevel);
        // Approve the contract to spend the mentee's tokens
        USDc.approve(address(this), 2 * 10**6);
    }

    // This function is for mentee
    function requestMentorshipWithFee(address _mentor)
        public
        payable
        onlyRegisteredUser
    {
        uint256 amt = mentor[_mentor].sessionFee;

        require(mentor[_mentor].isMentor, "Selected mentor is not available");
        require(
            mentor[_mentor].sessionFee > 0,
            "Mentor has not set a session fee"
        );
        // Check if the caller has already approved the contract to spend their tokens
        require(
            USDc.allowance(msg.sender, address(this)) >= amt,
            "Not enough allowance"
        );

        // Transfer USDC to this contract
        require(
            USDc.transferFrom(msg.sender, address(this), amt ),
            "Transfer failed"
        );

        // require(msg.value >= mentor[_mentor].sessionFee, "Insufficient funds to cover the session fee");
        MentorshipSessionWithFee memory newRequest = MentorshipSessionWithFee({
            mentor: _mentor,
            mentee: msg.sender,
            timestamp: block.timestamp,
            sessionFee: mentor[_mentor].sessionFee,
            isAccepted: false
        });

        mentorshipSessionsWithFee[_mentor][msg.sender] = newRequest;
        mentorshipRequests[_mentor].push(newRequest);

        MentorshipRequestStatus memory requestStatus = MentorshipRequestStatus({
            mentor: _mentor,
            mentee: msg.sender,
            timestamp: block.timestamp,
            isAccepted: false
        });

        mentorshipRequestStatus[msg.sender].push(requestStatus); // Store the status of the request

        emit NewMentorshipSession(_mentor, msg.sender, block.timestamp);
    }

    function getMentorshipRequestsForMentee()
        public
        view
        onlyRegisteredUser
        returns (MentorshipRequestStatus[] memory)
    {
        return mentorshipRequestStatus[msg.sender];
    }

    // this function can only be called by mentors
    function getMentorshipRequestsForMentor()
        public
        view
        onlyRegisteredMentor
        returns (MentorshipSessionWithFee[] memory)
    {
        return mentorshipRequests[msg.sender];
    }

    // this function can only be called by mentors
    function acceptMentorshipRequest(
        address _mentee,
        uint64 _destinationChainSelector
    ) public onlyRegisteredMentor {
        require(
            mentorshipSessionsWithFee[msg.sender][_mentee].sessionFee > 0,
            "No active mentorship request"
        );

        // Find the index of the mentorship session in mentorshipRequests
        uint256 index = findMentorshipRequestIndex(msg.sender, _mentee);

        // Update the isAccepted field in the mentorshipRequests array
        mentorshipRequests[msg.sender][index].isAccepted = true;

        // Find the index of the mentorship request in mentorshipRequestStatus of the mentee
        uint256 menteeIndex = findMentorshipRequestStatusIndex(
            _mentee,
            msg.sender
        );

        // Update the isAccepted field in the mentorshipRequestStatus array of mentee
        mentorshipRequestStatus[_mentee][menteeIndex].isAccepted = true;
        allowlistDestinationChain(_destinationChainSelector, true);

        emit MentorshipAccepted(msg.sender, _mentee);
    }

    // Helper function to find the index of the mentorship request in mentorshipRequestStatus
    function findMentorshipRequestStatusIndex(address _mentee, address _mentor)
        internal
        view
        returns (uint256)
    {
        MentorshipRequestStatus[] memory requests = mentorshipRequestStatus[
            _mentee
        ];

        for (uint256 i = 0; i < requests.length; i++) {
            if (requests[i].mentor == _mentor) {
                return i;
            }
        }

        revert("No active mentorship request found");
    }

    // Helper function to find the index of the mentorship session in mentorshipRequests
    function findMentorshipRequestIndex(address _mentor, address _mentee)
        internal
        view
        returns (uint256)
    {
        MentorshipSessionWithFee[] memory requests = mentorshipRequests[
            _mentor
        ];

        for (uint256 i = 0; i < requests.length; i++) {
            if (requests[i].mentee == _mentee && requests[i].sessionFee > 0) {
                return i;
            }
        }

        revert("No active mentorship request found");
    }

    // this function
    function endMentorshipWithFee(
        uint64 _destinationChainSelector,
        address _mentor,
        address _token
    ) public {
        uint256 amt = (mentorshipSessionsWithFee[_mentor][msg.sender].sessionFee * 3) / 4;
        require(amt >= 100000, "Amount must be greater than or equal to amt * 10^5");

        // if (amt > 0) {
            transferTokensPayLINK(
                _destinationChainSelector,
                _mentor,
                _token,
                amt
            );
            // payable(_mentor).transfer(mentorshipSessionsWithFee[_mentor][msg.sender].sessionFee);
            emit SessionFeeTransferred(
                msg.sender,
                _mentor,
                amt
            );
        // }

        mentorshipSessionsWithFee[_mentor][
            msg.sender
        ] = MentorshipSessionWithFee({
            mentor: address(0),
            mentee: address(0),
            timestamp: 0,
            sessionFee: 0,
            isAccepted: false
        });
    }
}
