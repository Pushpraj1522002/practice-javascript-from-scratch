"use strict"; //treat all code as newer version.
var hello = "hello" // we have stoped using 'var' due to block scope problems, in older days it was not following scopes, so we use 'let' instead
console.log(hello);



//______________________________POPUPS__________________________________________________________________
// alert(3+3) // it will not work in nodejs in this way, if we run this line of code in browser console it will run just fine.

// confirm()  
/* const userResponse = confirm("Do you want to continue?");
if (userResponse) {
  console.log("User chose OK.");
} else {
  console.log("User chose Cancel.");
} */

// prompt()
/* const userName = prompt("What is your name?");
if (userName) {
  console.log(`Hello, ${userName}!`);
} else {
  console.log("User canceled the prompt.");
}
 */

__________________________________________________________________________
console.log("please"); console.log("do not do this") //it is not the good practice because it is not readable

//semicolon is use to terminate the current statement. It is the good practice.

//___________________________________ primitive datatypes ....

//number 
const bigNumber = 232323132423231n;
console.log(bigNumber);
console.log(typeof bigNumber);   //bigint
//bigint


//string : " "


//boolean : true/false


const outsideTemp = null;
console.log(outsideTemp); //null
console.log(typeof outsideTemp); //object
//null : standalone value


let userEmail; //or
let userState = undefined;
console.table([userEmail,userState]);
//undefined : in both the cases above the value of the veriable is undefined.


//********** 
//console.log(typeof(null));        //object
//console.log(typeof(undefined));   //undefined
//console.log(typeof(NaN));         //number

const id = Symbol('123');
const anotherId = Symbol('123');
console.table([id,anotherId]);
console.log(id==anotherId);  //false
console.log(id===anotherId);  //false
console.log(typeof id); //symbol
//symbol : uniqueness of the component, even if we pass the same value for different variables the return values will be unique.

//___________________non primitive datatypes or reference type.
let myObj = {
    name: "pushpraj",
    age: 22,
};
console.log(typeof myObj); //object
// object,


const heros = ["shaktiman","naagraj", "doga"];
console.log(typeof heros); //object
// array,

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction);
//functions




//_______________________________________________________________________
console.log("hello my friend");

console.log(typeof undefined); // undefined.
console.log(typeof null); // object
// javascript is dynamically typed language.

let a = "12"
let b = Number(a);
console.log(typeof(a));
console.log(typeof(b));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ___________________memories_____________________
// stack(primitive type) and heap(non primitive type).
// the data stored in stack give the copy of the value stored.
let myName = "pushpraj"
let myPrevName = myName
myPrevName = "anand"
console.log(myName);
console.log(myPrevName);
// the data stored in heap. the reference of the data is returned, so if changes are made it also reflect in the origional space.
let userOne = {
    email : "pushpraj.desai.2020@gmail.com",
    upi : "user@byl"
}

let userTwo = userOne

userTwo.email = "pushpraj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);




