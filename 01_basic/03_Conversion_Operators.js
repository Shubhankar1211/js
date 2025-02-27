// let score = "33abc";
let score = undefined;// it will give NAN
//let score = null; // it will  give 0 output
console.log(typeof score); // output -> number bot have same outputa and in lowercase
console.log(typeof (score));// poutput -> number


let valueInNumber = Number(score)
console.log(typeof valueInNumber); // it will give number in return
console.log(valueInNumber);// it give NAN

// "333" => 333 ;
// "33abc" => NaN;
// true => 1; false =>0

//this is to convert into boolean
let isLoggedIn =1 ;
let booleanIsLooggedIn = Boolean(isLoggedIn)
console.log(booleanIsLooggedIn);
// 1=> true; 0=> false;
//"" => false
// " hitesh "=>true 


let value = 3;
let negvalue  = -value;
console.log(negvalue);//-3

let str1 = "shubhankar";
let str2 = "chauhan";
let str3 = str1 + str2;
console.log(str3);//shubhankarchauhan

console.log("1" + 2); //12
console.log(1 + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32
console.log(true);//true
console.log(+true); 1
//console.log(true+);//error
console.log(+""); 0

// postfix operator
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n


let a = 3;//preffix operator
const b = ++x;
// x is 4; y is 4

let a2 = 3n;
const b2 = ++x2;
// x2 is 4n; y2 is 4n




