const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Spacebear", (context) => {
    const { ethers } = context;
    async () => {
        try {
            const spaceBearInstance = ethers.contract("Spacebear");
            
            return { spaceBearInstance };
        } catch (error) {
            console.error("Error deploying contract:", error);
            throw error;
        }
    }
    }
);
