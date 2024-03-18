const hre = require("hardhat");

async function main() {
  const CampaignFactory = await hre.ethers.getContractFactory(
    "CampaignFactory"
  );
  const campaignFactory = await CampaignFactory.deploy();
  await campaignFactory.deployed();
  console.log("factory deployed to: ", campaignFactory.address);
}

main();
