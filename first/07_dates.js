// let myDate = new Date()
// console.log(myDate.toString());     //Wed Jan 31 2024 03:47:02 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Wed Jan 31 2024
// console.log(myDate.toLocaleString());   //1/31/2024, 3:48:35 AM
// console.log(typeof myDate); //object


// let myCreatedDate = new Date(2023,0,23)     // month starts from the 0 index
// console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleString());    //1/23/2023, 12:00:00 AM

// let myNewDate  = new Date("2023-01-14");        // in dd/mm/yyyy the month starts from 1 not 0.
// console.log(myNewDate.toLocaleString());        //1/14/2023, 12:00:00 AM

let myNewDate1 = new Date("01-14-2023");
// console.log(myNewDate1.toDateString());         //Sat Jan 14 2023

let myTimeStamp = Date.now()
// console.log(myTimeStamp);   //1706673486709 it is in millisecond.
// console.log(myNewDate1.getTime()); //1673654400000 //because myNewDate1 is the type object and myNewDate1.getTime() returns the value.

//console.log(Math.floor(Date.now()/1000)); //converts milliseconds to seconds.

let newDate = new Date()
console.log(newDate);   
console.log(newDate.getMonth());    //it starts from the index 0
console.log(newDate.getDate());
console.log(newDate.getDay());

console.log(`the day is ${newDate.getDay().toString()} and the date is ${newDate.toLocaleString()}`);       //the day is 3 and the date is 1/31/2024, 4:13:18 AM

console.log(newDate.toLocaleString('default',{
    weekday:"long"                                  //Wednesday
}));