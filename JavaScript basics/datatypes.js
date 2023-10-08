"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Rizwan")


let name = "Rizwan"
let age = 18
let isLoggedOut = false
let state;

// Primitive DataTypes:
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

console.log(typeof null); // type is object
console.log(typeof undefined); // type is undefined

//  Primitive
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // in javascript all types of numbers are include in Number datatype upto 2^53

const isLoggedIn = false
const outsideTemp = null // null means empty or no value 
let userEmail; // by deafult it's undefined you can also assign value as undefined i.e. userMail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// Symbol makes the returned value unique so here id is not equal to anotherId
console.log(id === anotherId);

const bigNumber = 3456543576654356754n // you can use n at the end to identify it as BigInt

// Reference (Non primitive)
// Array, Objects, Functions

// Arrays store same type of data in continuous memory
const heros = ["shaktiman", "naagraj", "doga"];

// objects are defined inside the curly braces {} their datatype can be anything
let myObj = {
    name: "hitesh",
    age: 22,
}

// in javascript you can store function as a variable also 
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);