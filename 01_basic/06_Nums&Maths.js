const score =400;
console.log(score);// it will direct return 400

const marks = new Number(100);
console.log(marks)// it return object which is in key pair [Number: 100]

console.log(score.toString());
console.log(score.toString().length);
console.log(score.toFixed(1));//400.0 it add zeros after value

const otherNUmber1 = 23.8965
console.log(otherNUmber1.toPrecision(3));// it will round of and return string // three ke bad lagega precicion output will be 23.9

const otherNUmber2 = 123.8965 // 124
console.log(otherNUmber2.toPrecision(3));

const otherNUmber3 = 1123.8965
console.log(otherNUmber3.toPrecision(3));//1.12e+3


const hundreds =100000;
console.log(hundreds.toLocaleString('en-IN'));



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,2,1,4,7,8,));
console.log(Math.max(4,2,1,4,7,8,));


console.log(Math.random());// it will generate the value between 0 and 1 
console.log(Math.random()*10);// it will shift decimal to one place 
console.log((Math.random()*10)+1);// here we use +1 to avoid zer case and always return upper value then the 0


const min = 10;
const max=  20;
console.log(Math.floor(Math.random() * (max-min +1)) + min);