
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	
	
  calculateDepth(arr, counter = 1){
	 for(let i = 0; i < arr.length; i++){
        
            if (Array.isArray(arr[i])){
			
			let newArr = arr[i];
			let currentDepth = this.calculateDepth(newArr) + 1;
			
			if(counter < currentDepth) counter = currentDepth;
            }
      }
return counter;
  }	  
};
