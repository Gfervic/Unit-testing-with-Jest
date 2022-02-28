// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))


// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // One approach
    // convertDollars in Euro and convert Euros to Yen 
    let oneYenInEuro = 127.9;
    let oneDolarinEuro = 1.2;
    let dollarsToYen = valueInDollar * oneYenInEuro / oneDolarinEuro;
    return dollarsToYen;
}

const fromYenToPound = function(valueInYen){
     // Another approach
    //  Convert Yen into Euro and 
    let valueInEuro = valueInYen / 127.9;
    // convert Euros into GBP 
    valueInGBP = valueInEuro * 0.8;
    return valueInGBP;
}


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }