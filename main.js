//BELOW WE ARE IMPORTING SHA256 LIBRARY:
const SHA256 = require('crypto-js/sha256');
//CREATION OF A BLOCKCHAIN
class Block { //WE'LL BEGIN BY MAKING A CLASS OF BLOCK:
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
        this.hash = ''; //hash will contain the hash of our block, and will need to be calculated, hence we'll be needing a way to calculate it.
    }
    //NOW WE'RE MAKING A METHOD/FUNC THAT WILL CALCULATE THE HASH OF THE BLOCK:
    //SUMMARY: means, it'll calculate the hash func, for that we'll need the properties (tracked/cloned properties, we made for reuse) of the bloc, and then it'll generate a new Hash (unique ID) for the block.
    //BEFORE CALCULATING, WE'LL NEED HASH FUNC/HASH-NUMBER, THAT WILL BE PROVIDED BY A LIBRARY CALLED crypto-js (npm). WE'LL INSTALL IT IN OUR CODE THROUGH TERMINAL TO GET THOSE HASH FUNCS.
    calculateHash() {
        //now we'll return here the sha256 hash of our properties:
        return SHA256(this.index + this.timeStamp + this.previousHash + JSON.stringify(this.data)).toString(); //to make it look good like a database, we have used JSON.stringify, it'll make the data property look good like its in an array. and .toString will take the output of the sha256, and will cast it to a string, otherwise we'll get an object from the library we're using.
    }
}