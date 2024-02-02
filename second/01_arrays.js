const myArr= [1,2,3,4,5,6 ];
const myArray = [1,2,3,4,true,"hellow"];

const myArr1 = new Array(1,2,3,4)

//in javascript the array is similer to the vector in the c++
//it contains the element of different types unlike the arrays in the c++
// arrays create the 'shallow copy' it will not create the 'deep copies'.

// console.log(myArray[5])     //hellow
// console.log(typeof myArr);      //object


//METHODS OF ARRAYS_________________________________________________

myArr.push(7)       //[1, 2, 3, 4,5, 6, 7]
myArr.push(8)       //[1, 2, 3, 4,5, 6, 7, 8]
myArr.pop();        //pops the last value of the array.
myArr.unshift(9)    //[9, 1, 2, 3,4, 5, 6, 7]
myArr.shift();      //[1, 2, 3, 4,5, 6, 7]
// console.log(myArr.includes(9));  //false
// console.log(myArr.indexOf(3));      //true

const newArr = myArr.join()
//join will bind the array and convert it to string.
// console.log(myArr);
// console.log(newArr);        //1,2,3,4,5,6,7

//slice , splice_____________________________________________________________

console.log("A",myArr);

const myn1 = myArr.slice(1,3);
console.log("C",myArr);     //C [1, 2, 3, 4,5, 6, 7]
console.log(myn1);  //[2,3]

const myn2 = myArr.splice(1,3);     //splice will manipulate the original array where slice will not
console.log("B",myArr);     //B [ 1, 5, 6, 7 ]
console.log(myn2);  //[2,3,4]




