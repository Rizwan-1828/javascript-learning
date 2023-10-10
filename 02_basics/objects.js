// singleton
// Object.create

// literal

const mySym = Symbol("key1") // declaration of symbol

const myObj = {
    name: "Rizwan", // keys are also strings
    "full name": "Rizwan Shaikh",
    age: 20,
    location: "Vadodara",
    email: "riz@parul.in",
    isLoggedIn: false,
    lastLoggedInDays: ["Sunday","Tuesday","Satturday"],
    [mySym]: "key2" // declaration of symbol in an object is done using square brackets []
}

// accessing properties of an object

// 1st way of accessing object properties
// console.log("Accessing object properties using dot '.'");
// console.log(myObj.name);
// console.log(myObj.age); 
console.log(myObj.location);

// 2nd way of accessing object properties
// console.log("Accessing object properties using as a string inside square brackets '[]'");

// console.log(myObj["email"]);
// console.log(myObj["isLoggedIn"]);
console.log(myObj["full name"]);

// way of accessing symbol property of an object
console.log("Accessing symbol property of object using only square brackets '[]'");
console.log(myObj[mySym]);