// index.js
const sum = require("./sum");
const multiply = require("./multiplication");
const sub=require("./subtraction");
const div=require("./division");
let sumA = 3;
let sumB = 5;
let sumResult = sum(sumA, sumB);
console.log(sumResult);

let mulA = 4;
let mulB = 6;
let mulResult = multiply(mulA, mulB);
console.log(mulResult);

let subA=4;
let subB=2;
let subResult= sub(subA,subB);
console.log(subResult);

let divA=8;
let divB=5;
let divResult= div(divA ,divB);
console.log(divResult);