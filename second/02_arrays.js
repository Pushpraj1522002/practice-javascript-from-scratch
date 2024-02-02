const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

console.log(marvel_heros);      //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//it is array inside array.
//this is very good qustion the third element of the marvel_heros is of the type array itself.

// console.log(marvel_heros[3]);       //[ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[4]);       //undefined
// console.log(marvel_heros[3][2]);    //batman

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);      //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//concat will return a new array with the output of the combined arrays.


const all_new_heros = [...marvel_heros,...dc_heros];        //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//spread operator 
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]];

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);       // [1, 2, 3, 4,  5,6, 7, 8, 9, 10,11]

console.log(Array.isArray("please"));   //false

//from() will converts "please" into array
console.log(Array.from("please"));      //[ 'p', 'l', 'e', 'a', 's', 'e' ]

console.log(Array.from({name: "hellow"}))       //[] 
// *****will give a empty array because it will not know that weather to make the value as array of the name as arrray.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));        //[ 100, 200, 300 ]

 
