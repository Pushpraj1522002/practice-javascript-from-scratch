const name = "pushpraj";
const repoCount = 50;
 
//console.log(name + repoCount + "value"); //pushpraj50value

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hello world');
console.log(gameName);  //[string: 'hellow world']  
console.log(typeof gameName);   //object


console.log(gameName.__proto__); //{}

console.log(gameName.length);   //11
console.log(gameName.toUpperCase());    //HELLOW WORLD
console.log(gameName);  //[string: 'hellow world'] // the original string will not change to uppercase the to primitive datatype stored in stack and the copy of the value is passed.

console.log(gameName.charAt(2)); //l

console.log(gameName.indexOf('d')); //10


const newString = gameName.substring(0,4);  //hell
console.log(newString);

const anotherString = gameName.slice(-10,4);    //ell
console.log(anotherString);

const newStringONe = "    hellow";  
console.log(newStringONe);      //    hellow
console.log(newStringONe.trim());   //hellow

const url = "https://pushpraj.com/pushpraj%20desai";
console.log(url.replace('%20', '-'));   //https://pushpraj.com/pushpraj-desai

console.log(url.includes('desai')); //true


const gameNameNew = new String('pushpraj-desai-com');
let gameNameNew1 = gameNameNew.split('-');

console.log(gameNameNew1);  //[ 'pushpraj', 'desai', 'com' ]
console.log(typeof gameNameNew1);   //object