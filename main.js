/////////////////////////////////////////////
//CREATION OF A BLOCKCHAIN
////////////////////////////////////////////

//BELOW WE ARE IMPORTING SHA256 LIBRARY:
const SHA256 = require('crypto-js/sha256');
///////////////////////////////////////////
//CLASS block STARTS FROM HERE AND IT'LL INCLUDE THE CALCULATION OF BLOCK/GENESIS-BOCK/1ST-BLOCK AS WELL:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
class block { //WE'LL BEGIN BY MAKING A CLASS OF BLOCK:
    constructor( //IN A CONSTRUCTOR, WE'RE ADDING THE PROPERTIES OF A BLOCK WE NEED TO MAKE A BLOCKCHAIN:
        index, //index tells where the block sits on the chain: means its position on the chain. 
        timeStamp, //timeStamp tell the time when the block was created: means its date of creation.
        data, //data could contain any type of information e.g; in case of currency--it can contain details of transaction, sender, & receiver.
        previousHash = '' //previousHash contains the string (unique ID) of the block, that insures the integrity of the blockchain, otherwise the block will be invalid.
    ) { //NOW WE KEEP TRACK OF ABOVE PROPERTIES BY USING THIS. STATEMENT. (SUMMARY: means, we cloned them for a reuse!)
        this.index = index;
        this.timeStamp = timeStamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash(); //hash will contain the hash of our block, and will need to be calculated, hence we'll be needing a way to calculate it.
        //above this.hash func is equals to this.calculateHash() so, the hash of the properties of the block can be calculated by the method/func on the Ln21 func section.  
    }
    //NOW WE'RE MAKING A METHOD/FUNC THAT WILL CALCULATE THE HASH OF THE BLOCK:
    //SUMMARY: means, it'll calculate the hash func, for that we'll need the properties (tracked/cloned properties, we made for reuse) of the bloc, and then it'll generate a new Hash (unique ID) for the block.
    //BEFORE CALCULATING, WE'LL NEED HASH FUNC/HASH-NUMBER, THAT WILL BE PROVIDED BY A LIBRARY CALLED crypto-js (npm). WE'LL INSTALL IT IN OUR CODE THROUGH TERMINAL TO GET THOSE HASH FUNCS.
    calculateHash() {
        //now we'll return here the sha256 hash of our properties:
        //this.index + this.SoOn declares that this info/parameters are passing to the hash function & calculateHash function for the calculation. 
        return SHA256(this.index + this.timeStamp + this.previousHash + JSON.stringify(this.data)).toString(); //to make it look good like a database, we have used JSON.stringify, it'll make the data property look good like its in an array. and .toString will take the output of the sha256, and will cast it to a string, otherwise we'll get an object from the library we're using.
        //AFTER ABOVE CODE LINE, WE'LL GO BACK TO OUR HASH FUNCTION WE WROTE IN THE CONSTRUCTOR WITH NO PARAMETER. WE'LL DECLARE IT THIS CALC METHOD SO IT CAN GENERATE THE HASH NO.
    }
}
//CLASS block ENDS HERE AND CALCULATION SECTIONS AS WELL! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2ND CLASS FOR BLOCKCHAIN HAT WILL START THE CHAIN SYSTEM BY CREATING NEW BLOCKS, STARTS FROM HERE:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//NOW WE'RE CREATING A CLASS FOR BLOCKCHAIN:
class blockChain { //we'll here again give it a constructor:
    constructor() { //this constructor will be responsible for initializing our blockchain, hence we'll give a property "chain" in this class which will be an array of blocks.
        this.chain = [this.createGenesisBlock()]; //after providing info in the below createGenesisBlock we declared that func on Ln39 in this.chain property, hence it could have the info to put into set of arrays.
        //NOW THE 1ST BLOCK ON THE BLOCKCHAIN IS CALLED A GENESIS BLOCK, WHICH WE'LL BE CREATING MANUALLY, HENCE WE'LL MAKE ANOTHER METHOD FOR IT, IN THIS CLASS, OUTSIDE OF THIS CONSTRUCTOR:
    }
    createGenesisBlock(){//Genesis block will return new block:
        //we're gonna make new block in the block chain from the 1st block we created at Ln9 which is known as the Genesis Block.
        return new block(0, "01/01/2022", "Account User: Uswa R. Balance: 1 Dodge Coin", "0"); //it is the new block that 1st block "Genesis" will create in the blockchain. It contains property variables like index = 0, date (timeStamp) = 01/01/2022, data = could be anything, & previousHash = which doesn't exist hence could be any random number/data.
        //AFTER ABOVE CODE LINE OR DECLARATION OF INPUT IN THE PARAMETERS, WE'LL HEAD UPWARDS TO OUR CONSTRUCTOR OF BLOCKCHAIN WHERE WE MADE A PROPERTY CALLED CHAIN, AND WE'LL DECLARE OUR ITS BELOW createGenesisBlock function/method, SO IT CAN HAVE THE DATA WE PROVIDED IN ITS ARRAY. 
    }
    //BELOW METHOD/FUNC WILL BE USEFUL FOR FUTURE:
    //getLatestBlock method will return the latest chain, hence we're giving this.chain property below:
    getLatestBlock(){
        return this.chain[this.chain.length -1]; //to return its last element, we've used .length here with -1, to get it from 1 rather than 0.
    }
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //addBlock method will receive a new block:
    addBlock(newBlock){
        //now the addBlock method will generate new blocks but it'll require the previousHash to get data from, hence we're using previousHash below to continue the formation of blockchain:
        newBlock.previousHash = this.getLatestBlock().hash; //since new/latest block formation requires previous block's data, hence we used previousHash but to put this previous hash-data into latest/new block we have to use latestBlock method, and .hash to tell our method that we need a new hash ID formation not the whole data.
        //now below, to re-calculate the hash to get a new hash unique ID for our latest/new block, for in-case, if any property from our 1st-block/genesis-block or class block at Ln9 (from constructor properties, not reusable properties), will be changed or tampered then, new block's ID will be new and unique.
        newBlock.hash = newBlock.calculateHash(); //now, we told the addBlock method after declaring that it'll need to generate a new unique hash ID from previous hash, and then it has to re-calculate it from calculateHash() method, which is our hash calculator. 
    }
}