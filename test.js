// import the functions from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106,583333 Yen", function(){
    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3.5)

    // if 1 yen is 127.9€ and one USD is 1.2€, then 3.5 dollars should be (3.5 * 127.9 / 1.2)
    const expected = 3.5 * 127.9 / 1.2; 
    
    // this is the comparison for the unit test
     expect(yen).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One yen should be 0,00625489 Pound", function(){
    // use the function like its suppoed to be used
    const yen = fromYenToPound(3.5)

    // if vulueinYen / 127.9€ is the value in €, that value in € * 0.8 is the value in GBP
    let valueInEuro = 3.5 / 127.9;
    const expected =valueInEuro * 0.8; 
    
    // this is the comparison for the unit test
     expect(yen).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
