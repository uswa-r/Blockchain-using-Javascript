//CREATION OF A BLOCKCHAIN
class Block { //WE'LL BEGIN BY MAKING A CLASS OF BLOCK:
    constructor( //IN A CONSTRUCTOR, WE'VE ADDED THE PROPERTIES OF A BLOCK WE NEED TO MAKE A BLOCKCHAIN:
        index, //index tells where the block sits on the chain: means its position on the chain. 
        timeStamp, //timeStamp tell the time when the block was created: means its date of creation.
        data, //data could contain any type of information e.g; in case of currency--it can details of transaction, sender, & receiver.
        previousHash = '' //previousHash contains the string (unique ID) of the block, that insures the integrity of the blockchain, otherwise the block will be invalid.
    ) { //NOW WE KEEP TRACK OF ABOVE PROPERTIES BY USING THIS. STATEMENT:
        this.index = index;
        this.timeStamp = timeStamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = ''; //hash will contain the hash of our block, and will need to be calculated, hence we'll be needing a way to calculate it.
    }
}