//____________________________Conversion_________________________________

//..............................Number()..............................
/* let score = "33"

console.log(typeof(score)); // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //33


let socre1 = "33abc"
let valueInNumbner1 = Number(socre1);
console.log(typeof valueInNumbner1); //number
console.log(valueInNumbner1); //NaN


let score2 = null
console.log(score2);        //null
let valueInNumbner3 = Number(score2);  
console.log(valueInNumbner3); //0

let score3 = undefined
console.log(score3);        //undefined
let valueInNumber4 = Number(score3);
console.log(valueInNumber4)     //NaN
 */


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN
// NaN => NaN

//...................................Boolean()..............................
/* let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true */

/* let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //FALSE */

/* let isLoggedIn = "HELLO"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //TURE */

// 1 => true; 0 => false
// "" => false
// "abc" => true
// null => false
// undefined => false
// NaN => false


//.............................String()............................
/* let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber); //33
console.log(typeof stringNumber); //string */


//______________________________Operation________________________________

/* let valuse = 3;
let negValuse = -valuse
console.log(negValuse);  */    //-3

/* console.log(2+2);
console.log(1-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3); */



/* console.log("1"+2); //12
console.log(1 + "2");   //12
console.log("1"+2+2);   //122 if the string is first all are converted to string.
console.log(1+2+"2");   //32 if the integer is first all the int are added.
console.log(1+2+"2"+4+5); //3245 */

/* console.log(true); //ture
console.log(+true); //1
console.log(+""); //0 */

/* let num1, num2, num3;
num1 = num2 = num3 = 2+2; */

let gameCounter = 100
gameCounter++;
console.log(gameCounter); //101

console.log(0==null); //false 
console.log(0==-null); //true

//hellow