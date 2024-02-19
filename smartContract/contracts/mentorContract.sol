// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {MenteeContract} from "contracts/menteeContract.sol";

contract MentorContract is MenteeContract {
    struct Mentor {
        address addr;
        string preferredLanguage;
        uint proficiencyLevel; // 1 to 10 scale
        bool isMentor;
        uint sessionFee;
        uint test;
    }

    struct MentorReputation {
        uint totalRatings;
        uint totalRatingSum;
    }

    // Array to store details of registered mentors
    Mentor[] registeredMentors;

    mapping(address => Mentor) mentor;
    mapping(address => MentorReputation) mentorReputations;

    event NewMentorRegistered(address indexed mentor);
    event MentorRated(address indexed mentee, address indexed mentor, uint rating);

    modifier onlyRegisteredMentor() {
        require(mentor[msg.sender].addr != address(0), "Mentor is not registered");
        _;
    }

    modifier onlyInterestedMentor() {
        require(!mentor[msg.sender].isMentor, "Mentor already registered");
        _;
    }

    function registerMentor(string memory _preferredLanguage, uint _sessionFee) public onlyInterestedMentor {
        require(mentor[msg.sender].addr == address(0), "Already registered interest");

        uint s_fee = _sessionFee * 10 ** 6;

        Mentor memory newMentor = Mentor({
            addr: msg.sender,
            preferredLanguage: _preferredLanguage,
            proficiencyLevel: 0, // Initialize proficiency level to 0
            isMentor: false,
            sessionFee: s_fee,
            test: 0 // Initialize test score to 0
        });

        mentor[msg.sender] = newMentor;

        emit NewMentorRegistered(msg.sender);
    }

    // Function to take the mentor proficiency test
    function takeMentorTest(uint _proficiencyLevel) public onlyRegisteredMentor {
        require(mentor[msg.sender].isMentor == false, "Already a registered mentor");
        // Simulate a test condition; you may replace this with your own logic.
        mentor[msg.sender].test = _proficiencyLevel;

        if (_proficiencyLevel >= 5) {
            mentor[msg.sender].isMentor = true;
            mentor[msg.sender].proficiencyLevel = _proficiencyLevel;
            registeredMentors.push(mentor[msg.sender]);
            emit NewMentorRegistered(msg.sender);
        }
    }

    // should be called by mentee
    function rateMentor(address _mentor, uint _rating) public onlyRegisteredMentee {
        require(_rating >= 1 && _rating <= 10, "Invalid rating");
        require(mentor[_mentor].isMentor, "Selected mentor is not available");

        mentorReputations[_mentor].totalRatings++;
        mentorReputations[_mentor].totalRatingSum += _rating;

        emit MentorRated(msg.sender, _mentor, _rating);
    }

    // Function to get the list of all registered mentors
    function getRegisteredMentors() public view returns (Mentor[] memory) {
        return registeredMentors;
    }
}