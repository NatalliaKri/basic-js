
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	

if(!Array.isArray(arr)) throw new Error('Not an array!');


let arrTransform = [];

	
for( let i = 0; i < arr.length; i++){  
 
    if(arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev'){
        arrTransform.push(arr[i]);
    };
    
	
	if(arr[arr.length - 1] === '--discard-next'){
		arrTransform.push('+++++');
		};
	
	
	if(arr[i] === '--discard-next' && i!== arr.length - 1){ 
       arrTransform.push('+++++');  
    };
	
	if(arr[0] === '--discard-prev'){
		arrTransform.push('+++++');	
	};
	
	
	if(arr[arr.length-1] === '--discard-prev'){
		arrTransform.pop();
	};
	
	
	if(arr[i] === '--discard-prev' && arr[i-2] === '--discard-next' && arr[i-1]){
	  arrTransform.splice(arrTransform.length-1, 2);   
	};
	
	
	if(arr[i] === '--discard-prev' && arr[i-2] !== '--discard-next' && i!== 0 && i!==arr.length-1){
	   arrTransform.pop();
	};
	
	
	if(arr[arr.length-1] === '--double-next') {
      arrTransform.push('+++++'); 
      arrTransform.pop(); 
	 };
		
	
if(arr[i] === '--double-next' && i!==arr.length-1){
	  arrTransform.push(arr[i+1]);		
   };
    	
	
if(arr[0] === '--double-prev'){
	 arrTransform.push('+++++');	
   };


if(arr[i] === "--double-prev" && i!== 0 && arr[i-2] === "--discard-next" ){	
	  arrTransform.splice(arrTransform.length-1, 2);  
	};


if(arr[i] === '--double-prev' && i!== 0 && arr[i-2] !== '--discard-next') {
       arrTransform.push(arr[i-1]);
    };	
	
}


let n = [];

for( let i = 0; i < arrTransform.length; i++){
	
	if(arrTransform[i] !== '+++++'){
          n.push(arrTransform[i]);	 
	}
};
return n;
};
