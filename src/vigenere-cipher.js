
class VigenereCipheringMachine {
	constructor(isDirect){
	  this.reverseFlag = !isDirect;
	}
	 
  
  encrypt(message, key) {
    if(message === undefined || key === undefined) throw new Error('No parameters!');
	
	const startCharCode = 65;
	const alphabetLength = 26;
	
	const keyUpper = key.toUpperCase();
	const messageUpper = message.toUpperCase();
    
	const resultArr = [];
	

	for(let i = 0, n=0; i < messageUpper.length; i++, n++){
		const messageChar = messageUpper[i];
		
		if((messageChar.charCodeAt(0) - startCharCode) < 0 ){	
			resultArr.push(messageChar);
			n--;
			continue;
		};
		
	    const keyChar = keyUpper[n % keyUpper.length];	
			
	    if((messageChar.charCodeAt(0) - startCharCode) >= 0){
		
		resultArr.push(String.fromCharCode(Math.abs(((messageChar.toUpperCase().charCodeAt(0) - startCharCode + keyChar.toUpperCase().charCodeAt(0) - startCharCode) % alphabetLength )  + startCharCode)));
		
		}
	}
	return resultArr.join('');
  }
  
  
  
  decrypt(encryptedMessage, key) {
    if(encryptedMessage=== undefined || key=== undefined) throw new Error('No parameters!');
	
	
	const startCharCode = 65;
	const alphabetLength = 26;
	
	const keyUpper = key.toUpperCase();
	
	const messageUpper = encryptedMessage.toUpperCase();
   
	const resultArr = [];
	
	
	for(let i = 0, n = 0; i < messageUpper.length; i++, n++){
		
		const messageChar = messageUpper[i];
		const keyChar = keyUpper[n % keyUpper.length];
		
		if((messageChar.charCodeAt(0) - startCharCode) < 0 || (messageChar.charCodeAt(0) - startCharCode) > alphabetLength - 1){	
			resultArr.push(messageChar);
			n--;
			continue;
		}
		
		
		
	  if((messageChar.charCodeAt(0) - startCharCode) >= 0 && (messageChar.charCodeAt(0) - startCharCode) <= alphabetLength-1){
		
	       if((messageChar.charCodeAt(0) >= keyChar.toUpperCase().charCodeAt(0)))	
	             resultArr.push( String.fromCharCode(messageChar.charCodeAt(0) - keyChar.toUpperCase().charCodeAt(0) +startCharCode));
	
	
	
	       if((messageChar.charCodeAt(0) < keyChar.toUpperCase().charCodeAt(0)))	
	             resultArr.push( String.fromCharCode(messageChar.charCodeAt(0) - keyChar.toUpperCase().charCodeAt(0)+ alphabetLength +startCharCode));
	};
	
	};
	
	return resultArr.join('');
  }
}

module.exports = VigenereCipheringMachine;

