const Spacebear=artifacts.require('Spacebear');
const truffleAssert= require('truffle-assertions');


contract("....",(accounts)=>{
    it('should credit an NFT to a specific acount', async ()=>{
        const spaceBearInstance= await Spacebear.deployed();
        let txResult=await spaceBearInstance.safeMint(accounts[1],"spacebear_1.json");
        // assert.equal(txResult.logs[0].event,"Transfer","That is not the transfer event!");
        // assert.equal(txResult.logs[0].args.from,"0x0000000000000000000000000000000000000000","Not a zero address!");
        truffleAssert.eventEmitted(txResult,"Transfer",{from:'0x0000000000000000000000000000000000000000',to:accounts[1],tokenId:web3.utils.toBN('0')});
        assert.equal(await spaceBearInstance.ownerOf(0),accounts[1],"Owner of Token 1 is not equal to account 2");
    })
});