//++++++++++++++++++++++++++++++++++ nums+++++++++++++++++++++++++++++++++
const score = 400
//console.log(score); //400


//explicetly mention 'number'
const balance = new Number(100);
//console.log(balance);   //[Number: 100]


//console.log(balance.toString());    //converts the number in string '100'
//console.log(balance.toString().length);    //converts the number in string '100' and also returns the length.
//console.log(balance.toFixed(2));    //the see the mentioned number decimal points.

const otherNumber = 123.82323;

//console.log(otherNumber.toPrecision(3)); //it returns the string. //124

const hundreds = 100000;
//console.log(hundreds.toLocaleString('en-IN'));  //1,00,000

//console.log(Number.MAX_VALUE);  //1.7976931348623157e+308
//console.log(Number.MAX_SAFE_INTEGER);   //9007199254740991

//+++++++++++++++++++++++++++++ math ++++++++++++++++++++++++++++++++++++
console.log(Math);  //Object [Math] {}

// console.log(Math.abs(-4));  //4
// console.log(Math.round(4.3));   //4
// console.log(Math.ceil(4.2));    //5
// console.log(Math.floor(4.2));   //4

// console.log(Math.min(4,2,3,45));  //2
// console.log(Math.max(3,2,4,2,54))   //54

console.log(Math.random()); //returns value between 0 and 1;
console.log((Math.random()*10)+1); //gives the balue between 1 and 10;
console.log(Math.floor((Math.random()*10))+1)

const min = 10;
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);




