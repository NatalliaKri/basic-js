
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
    if(!(members instanceof Array)) return false;
    let arr = [];

    for(let i = 0; i < members.length; i++)
    { 
        if(typeof members[i] !== 'string') arr.push('');
		
		
		if(typeof members[i] === 'string'){
		
        let memberTrim = members[i].trim();
        arr.push(memberTrim[0].toUpperCase());
		} 
    }
    return arr.sort().join('');
};
