

const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const modernActivity= 15; 
    const halfLifePeriod= 5730;
    if(typeof sampleActivity !== 'string' || sampleActivity === '') return false;
    let sampleActivityNum = Number(sampleActivity);
    if(isNaN(sampleActivityNum)) 
    {
        return false;
    }
    if(sampleActivityNum > modernActivity) return false;
    if(sampleActivityNum <= 0) return false;
    const k = Math.LN2 / halfLifePeriod;
    return Math.ceil(Math.log(modernActivity/sampleActivityNum)/k);

};
