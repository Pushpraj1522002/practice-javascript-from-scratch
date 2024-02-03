const tinderUser = new Object() //singleton object
//same as "const tinderUser = {}"   //non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);    //{ id: '123abc', name: 'sammy', isLoggedIn: false }

const regularUser = {
    email: "pushpraj@gmail.com",
    fullName: {
        usersFullName:{
            firstName: "pushpraj",
            lastName: "desai"
        }
    }
}

// console.log(regularUser.fullName);  //{ usersFullName: { firstName: 'pushpraj', lastName: 'desai' } }
// console.log(regularUser.fullName.usersFullName);        //{ firstName: 'pushpraj', lastName: 'desai' }
// console.log(regularUser.fullName.usersFullName.firstName);  //pushpraj

const obj1 ={
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}

//const obj3 = {obj1,obj2}

//console.log(obj3);      //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);      //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1,...obj2};
console.log(obj3);      //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//when values are accessed from database it will be in the array of objects.

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"a@gmail.com"
    }

]

console.log(tinderUser);
console.log(Object.keys(tinderUser));   //[ 'id', 'name', 'isLoggedIn' ]
//the output is in type of array.

console.log(Object.values(tinderUser));     //[ '123abc', 'sammy', false ]
//the output is in the type of array.

console.log(Object.entries(tinderUser))     //[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]
//the output is the array of array of values and array of keys.

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //true.

