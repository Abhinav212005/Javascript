// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); => object

// let myCreatedDate = new Date(2023, 0, 23) => Mon Jan 23 2023(Month starts from 0)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) => 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14") => 1/14/2023, 12:00:00 AM
let myCreatedDate = new Date("01-14-2023") // Same like previous
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); => value will come in milliseconds
// console.log(Math.floor(Date.now()/1000)); =>now it will be in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //as indexing starts from 0 so to make it in the same way as date is written
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', { //ctrl+space
    weekday: "long",
    //timeZone
})
