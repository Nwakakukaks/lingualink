# LinguaMentor Smart Contract Readme

## Inspiration
The LinguaMentor smart contract was inspired by the desire to create a decentralized mentorship platform that facilitates language learning. The contract combines features of a mentorship system with an incentive mechanism involving token transactions.

## How it Works
### Mentorship System
The contract allows users to register as mentors or mentees. Mentors can set a session fee, and mentees can request mentorship by paying this fee in a specified ERC-20 token (in this case, USDC). Mentorship requests are tracked, and mentors can accept or reject requests.

### Token Transactions
The smart contract handles token transactions, ensuring that mentees have sufficient allowance to cover the session fee. Upon acceptance of a mentorship request, a portion of the session fee is transferred to the mentor.

### Cross-Chain Compatibility
The contract includes functions for cross-chain compatibility, enabling the transfer of session fees to a specified destination chain.

## How I Built It
The smart contract was built using Solidity, leveraging the OpenZeppelin library for ERC-20 token functionality. It incorporates two existing contracts, `MentorContract` and `linguaCCIP`, and extends their capabilities to create a comprehensive mentorship system.

## Challenges I Encountered
- **Token Allowance Management:** Ensuring that mentees have approved the contract to spend their tokens required careful attention to avoid potential issues with allowances.

- **Cross-Chain Integration:** Implementing cross-chain functionality added complexity, especially with the need to handle different destination chains.

## Accomplishments
- **Mentorship System:** Successfully implemented a mentorship system where mentors can set fees, mentees can request mentorship, and mentors can accept or reject requests.

- **Token Transactions:** Incorporated token transactions seamlessly, ensuring secure transfers between mentees and mentors.

- **Cross-Chain Compatibility:** Enabled cross-chain compatibility for transferring session fees to a specified destination chain.

## What I Learned
- **ERC-20 Integration:** Gained experience in integrating ERC-20 token functionality into a smart contract.

- **Cross-Chain Development:** Learned how to implement cross-chain functionality for token transfers.

## What's Next
- **Enhanced Features:** Explore additional features, such as rating systems for mentors and mentees, to further improve the platform.

- **Security Audits:** Conduct thorough security audits to identify and address potential vulnerabilities.

- **User Interface:** Develop a user interface or integrate the contract into a decentralized application (DApp) for a user-friendly experience.

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
