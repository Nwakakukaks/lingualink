// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import {LinguaCert} from "contracts/linguaCert.sol";

contract MenteeContract {
    struct Mentee {
        address addr;
        string preferredLanguage;
        uint proficiencyLevel; // 1 to 10 scale
    }

    mapping(address => Mentee)  mentee;
    mapping(address => uint) userRewards;

    event NewMenteeRegistered(address indexed mentee);

    modifier onlyRegisteredMentee() {
        require(mentee[msg.sender].addr != address(0), "Mentee is not registered");
        _;
    }

    function registerMentee(string memory _preferredLanguage, uint _proficiencyLevel) internal  {
        require(mentee[msg.sender].addr == address(0), "Mentee already registered");
        mentee[msg.sender] = Mentee(msg.sender, _preferredLanguage, _proficiencyLevel);
        emit NewMenteeRegistered(msg.sender);
    }
}