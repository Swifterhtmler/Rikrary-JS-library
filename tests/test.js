// average function

Array.prototype.avr = function () {
    if (this.length === 0) {
       return console.log("Cannot calculate length of an empty array")
    } else {
    let sum = 0;    
    for (let i = 1; i < this.length; i++) {
        sum += this[i]
    }
   let average = sum / this.length
   return average.toFixed(3)
  }
}
let arr = [1,7,4,9,7,5]
let arr2 = [1,2,6,6,7,5]
let arr3 = [1,7,5,9,7,5]
let arr4 = [1,7,5,9,7,5]

console.log(arr.avr()) // 5.333
console.log(arr2.avr()) // 4.333
console.log(arr3.avr()) // 5.500
console.log(arr4.avr()) // 5.500

// this file is still in production

String.prototype.rev = function () {
    return this.split('').reverse().join('');
}

let myString = "Hello";

console.log(myString.rev())

// returns olleH

// all the tests below line 37 (this line are made by ai)

const Rutil = require('src/index.js');

// Test function to check if a number is even
function testIsEv() {
    console.log(isEv(2) === true ? 'Pass' : 'Fail'); // Output: Pass
    console.log(isEv(3) === false ? 'Pass' : 'Fail'); // Output: Pass
    console.log(isEv(0) === true ? 'Pass' : 'Fail'); // Output: Pass
    console.log(isEv(-2) === true ? 'Pass' : 'Fail'); // Output: Pass
    console.log(isEv(-3) === false ? 'Pass' : 'Fail'); // Output: Pass
}

// Test Array.prototype.avr
function testAvr() {
    console.log([1, 2, 3, 4].avr() === '2.500' ? 'Pass' : 'Fail'); // Output: Pass
    console.log([10, 20, 30].avr() === '16.667' ? 'Pass' : 'Fail'); // Output: Pass
    console.log([].avr() === "Cannot calculate length of an empty array" ? 'Pass' : 'Fail'); // Output: Pass
}

// Test Array.prototype.bsort
function testBsort() {
    console.log(JSON.stringify([3, 2, 1].bsort()) === JSON.stringify([1, 2, 3]) ? 'Pass' : 'Fail'); // Output: Pass
    console.log(JSON.stringify([5, 1, 4, 2, 8].bsort()) === JSON.stringify([1, 2, 4, 5, 8]) ? 'Pass' : 'Fail'); // Output: Pass
    console.log(JSON.stringify([2, 3, 1, 5, 4].bsort()) === JSON.stringify([1, 2, 3, 4, 5]) ? 'Pass' : 'Fail'); // Output: Pass
}

// Test Array.prototype.qsort
function testQsort() {
    console.log(JSON.stringify([3, 2, 1].qsort()) === JSON.stringify([1, 2, 3]) ? 'Pass' : 'Fail'); // Output: Pass
    console.log(JSON.stringify([5, 1, 4, 2, 8].qsort()) === JSON.stringify([1, 2, 4, 5, 8]) ? 'Pass' : 'Fail'); // Output: Pass
    console.log(JSON.stringify([2, 3, 1, 5, 4].qsort()) === JSON.stringify([1, 2, 3, 4, 5]) ? 'Pass' : 'Fail'); // Output: Pass
}

// Test String.prototype.rev
function testRev() {
    console.log('hello'.rev() === 'olleh' ? 'Pass' : 'Fail'); // Output: Pass
    console.log('world'.rev() === 'dlrow' ? 'Pass' : 'Fail'); // Output: Pass
    console.log('12345'.rev() === '54321' ? 'Pass' : 'Fail'); // Output: Pass
    console.log(''.rev() === '' ? 'Pass' : 'Fail'); // Output: Pass
}

// Run all tests
testIsEv();
testAvr();
testBsort();
testQsort();
testRev();
