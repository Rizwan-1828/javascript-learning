let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())

// let createdDate = new Date(2023 , 0 , 12) // year,month,date 
// let createdDate = new Date(2023 , 0 , 12 , 7 , 56) // year,month,date,hours,minutes
// let createdDate = new Date("12-12-2003") // mm/dd/yyyy format
// let createdDate = new Date("2003-07-28") // yyyy/mm/dd format 
let createdDate = new Date("2003-07-28 16:12") // yyyy/mm/dd you can also give time by writing it like this- hours:minutes 
 
// console.log(createdDate.toLocaleString());

let timeStamp = Date.now()

// console.log(timeStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(timeStamp/1000)); // to convert into seconds divide the time by 1000

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1);

// console.log(`${newDate.getDate()} is the date and ${newDate.getFullYear()} is the year`);
console.log(`Today is ${newDate.toLocaleString('default',{weekday:"long"})} `);
console.log(`And the it is ${newDate.toLocaleDateString('default',{dayPeriod:"long"})}`);