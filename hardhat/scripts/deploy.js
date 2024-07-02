async function main() {
    const hre = require("hardhat");
    const { ethers } = hre;

    try {
        console.log("Fetching Spacebear contract factory...");
        const Spacebear = await ethers.getContractFactory("Spacebear");

        console.log("Deploying Spacebear contract...");
        const spaceBearInstance = await Spacebear.deploy();

        await spaceBearInstance.waitForDeployment();
        const myContractDeployedAddress = await spaceBearInstance.getAddress();

        console.log(`Deployed contract at ${myContractDeployedAddress}`);
    } catch (error) {
        console.error("Error deploying contract:", error);
        process.exit(1);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error in main function:", error);
        process.exit(1);
    });
