const {expect}= require('chai');
const hre= require('hardhat');
const {loadFixture}=require("@nomicfoundation/hardhat-network-helpers")

describe("Spacebear",function(){
    async function deploySpacebearAndMintTokenFixture(){
        const Spacebear= await hre.ethers.getContractFactory("Spacebear");
        const spacebearInstance=await Spacebear.deploy();
        await spacebearInstance.waitForDeployment()
        const [owner,otherAccount]=await hre.ethers.getSigners();
        await spacebearInstance.safeMint(otherAccount.address,'https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/nftdata/1');
        return {spacebearInstance};
    }

    it("is possible to mint a token",async()=>{
        const {spacebearInstance}=await loadFixture(deploySpacebearAndMintTokenFixture);

        const [owner,otherAccount]=await hre.ethers.getSigners();

        expect(await spacebearInstance.ownerOf(0)).to.equal(otherAccount.address);
    })
    it("fails to transfer tokens from the wrong address",async()=>{
        const {spacebearInstance}=await loadFixture(deploySpacebearAndMintTokenFixture);


        const [owner,otherAccount,notTheNFTOwner]=await hre.ethers.getSigners();
        expect(await spacebearInstance.ownerOf(0)).to.equal(otherAccount.address);
        await expect(spacebearInstance.connect(notTheNFTOwner).transferFrom(otherAccount.address,notTheNFTOwner.address,0)).to.be.revertedWith("ERC721: caller is not token owner or approved");
    })
})