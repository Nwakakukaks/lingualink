// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  // this is deployed on Avalanche Fuji
  const router = "0xF694E193200268f9a4868e4Aa017A0118C9a8177";
  const LINK = "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846";

  const linguaMentor = await hre.ethers.deployContract("LinguaMentor", [router, LINK]);

  await linguaMentor.waitForDeployment();

  console.log(`linguaMentor deployed to ${linguaMentor.target}`);

  // Link will now be transferred to this contract
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
