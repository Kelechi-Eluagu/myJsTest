// Section 2

// Q1)

let Fizz = [];
let Buzz = [];
let FizzBuzz = [];
let Other = [];

for (let i = 1; i <= 200; i++) {
    if(i % 3 === 0 && i % 5 === 0 ) {
        FizzBuzz.push(i);
    }else if(i % 3 === 0) {
        Fizz.push(i);
    }else if(i % 5 === 0) {
        Buzz.push(i);
    }else {
        Other.push(i);
    }
}
console.log("Total Number of Fizz = " + Fizz.length);
console.log("Total Number of Buzz = " + Buzz.length);
console.log("Total Number of FizzBuzz = " + FizzBuzz.length);
console.log("Total Number of Other = "    + Other.length);

// Q2)

let evenArr = [];
let oddArr = [];

for (let id = 0; id <= 200; id++) {
    if(id === 0 || id % 2 === 0 ) {
        evenArr.push(id);
    }else {
        oddArr.push(id);
    }
}
console.log("First segment of emails: " + evenArr);
console.log("Second segment of emails: " + oddArr);
