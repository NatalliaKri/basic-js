
const CustomError = require("../extensions/custom-error");

const chainMaker = {
	
  currentChain: [],
	
  getLength() {
    return this.currentChain.length;
  },
  
  addLink(value) {
	  this.currentChain.push('( ' + value + ' )');
	  return this;
	  },
	   
  removeLink(position) {  
	  if(typeof position === 'number' && Number.isInteger(position)){
      
		  if(position < 1|| position> this.getLength()){
			  this.currentChain.length = 0;
			  throw new Error(' Position is not correct or nonexistant!');  
		  };
		  
		  let index = position - 1;
		  this.currentChain.splice(index, 1);
		  return this;
	  };
	  
	  this.currentChain.length = 0;
	  throw new Error(' Position is not integer number! ');  
  },
   
  reverseChain() {
    this.currentChain.reverse();
	  return this;
  },
  
  finishChain() {
	  let chain = this.currentChain.join('~~');
	  this.currentChain.length = 0;
	  return chain;
  },  
};

module.exports = chainMaker;

	  
