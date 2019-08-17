const _ = require('lodash');

/* coinValues must be in descending order 
   each value must be an even multiple of the preceding value.
*/
const coinValues = {
    quarter: 25,
    dime: 10,
    nickle: 5,
    penny: 1
};

function coinGen(cents){
    
    // Create an empty result object
    let results = {};

    for(const coinType in coinValues){

        // Find whole number of coins that divide cents
        results[coinType] = Math.floor(cents / coinValues[coinType]);

        // Assign cents to the remainder after dividing by the value
        cents %= coinValues[coinType];
    }
    return results;
}

let testCents = _.range(100);

testCents.forEach(cents => {
    console.log("Cents:", cents);
    console.log("Change", coinGen(cents));
});

