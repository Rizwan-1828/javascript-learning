// this is singleton object declared using this syntax

const obj = new Object()
obj.id = "abc123"
obj.email = "abc@mail.com"
obj.isLoggedIn = false

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// console.log(obj.hasOwnProperty('name'));

// creating objects under objects

const newUser = {
    name: "Rizwan",
    userName: {
        fullName: {
            firstName:"Rizwan",
            lastName: "Shaikh"
        }
    }
}

// console.log(newUser.userName.fullName.firstName); // way to access objects present inside object

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2} // stores object inside object same as arrays
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2) // this is a good practice,extra curly braces is the targeted empty object, hence dor not interfering into other objects it is better to give an empty curly braces {}
// console.log(obj3); 

const obj3 = {...obj1,...obj2}
console.log(obj3);

// when values are accessed from database it comes in the form of an array
const users = [
    {
        id: 1,
        name: "Aman"
    },
    {
        id: 2,
        name: "Bilal"
    },
    {
        id: 3,
        name: "Tax"
    },
    {
        id: 4,
        name: "Tom"
    }
]

// and this is how the values are accessed 

// console.log(users[1].name);
// console.log(users[0].id);
// console.log(users[3].name);