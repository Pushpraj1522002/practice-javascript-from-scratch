//singleton is made using constructor.
//object.create

//literal and constructor

//Objects literals.

const mySym = Symbol("keys1")
const mySym1 = Symbol("keys2")

const JsUser = {
    name : "pushpraj",
    "full name": "pushpraj desai",
    mySym: "myKey1",        //this is wrong way to use the symbol in object.
    [mySym1]: "myKey2",     // this is correct way to use the symbol in objects.
    age : 21,
    location : "bengalore",
    email: "pushpraj.desai.2020@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"]
}

// console.log(JsUser.email)       //pushpraj.desai.2020@gmail.com
// console.log(JsUser["email"])        //pushpraj.desai.2020@gmail.com
// console.log(JsUser["full name"])        //full name
// console.log(JsUser.mySym)       //mykey1
// console.log(typeof JsUser.mySym)        //string.
//the type of the mySym is the string but we have declared it as symbol.

//to solve this we should write the mySym as [mySym]
//while accessing also we should use it in square brackets.

// console.log(JsUser[mySym1])     //myKey2
// console.log(typeof JsUser[mySym1])      //string


//change the values.
JsUser.email = "please@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "goodboy@gmail.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("hellow js user");
}

//console.log(JsUser.greeting);       //[Function (anonymous)]
console.log(JsUser.greeting()); 
// hellow js user
// undefined

JsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greetingtwo());
// hello js user, pushpraj
// undefined
