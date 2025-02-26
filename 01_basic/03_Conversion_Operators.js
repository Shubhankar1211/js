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