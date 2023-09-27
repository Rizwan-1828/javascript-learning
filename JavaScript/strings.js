const name = "Adam" 
// These are the 2 ways to declare the string
const newName = new String("Rizwan")

// console.log(name);

// console.log(newName.length);
// console.log(newName.toUpperCase());
// console.log(newName.indexOf('n'));

// console.log(name.length);
// console.log(name.charAt(2));

const gameName = new String('Call of Duty')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(10));
console.log(gameName.indexOf('f'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-12, 4)
console.log(anotherString);

const newStringOne = "   hello    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/google%20playstore"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split(' '));