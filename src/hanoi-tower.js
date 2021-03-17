

const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    
    const turnsPerSecond = turnsSpeed / 3600;
    const turns = (2 ** disksNumber) - 1;
    const seconds = turns / turnsPerSecond;
    const secondsRounded = Math.floor(seconds);
    return {
	 turns: turns,
	 seconds: secondsRounded 
    };
};
