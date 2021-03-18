
const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 
 str = String(str);
 
let repeatTimes = options.repeatTimes;
let separator = options.separator;
let addition = options.addition;
addition = String(addition);
if(addition === 'undefined') addition = '';

let additionRepeatTimes = options.additionRepeatTimes;
let additionSeparator = options.additionSeparator;  
  
  if(!separator) separator = '+';
  if(!additionSeparator) additionSeparator = '|';
  if(!repeatTimes) repeatTimes = 1;
  if(!additionRepeatTimes) additionRepeatTimes = 1;

let d = '';
let ad = '';


if(Number.isInteger(additionRepeatTimes)){

for(let i = 1; i <= additionRepeatTimes; i++){
				if(i !== additionRepeatTimes)
					   ad += addition + additionSeparator;
				if(i === additionRepeatTimes)
					   ad +=addition;
			}
}

if(!Number.isInteger(additionRepeatTimes)){
    	ad += addition;
		}	
			
if(Number.isInteger(repeatTimes)){	
		
   for(let r = 1; r <=repeatTimes; r++){
    			
        if(r !== repeatTimes) d += str + ad + separator ;
 
        if(r === repeatTimes) d += str + ad;
 
    }
}
 
if(!Number.isInteger(repeatTimes)) return str;
 

return d;
};
  
