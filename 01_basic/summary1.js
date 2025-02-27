// Primitive // these are call by values  copy me changes hote h 
//7 types : string , number , boolean ,null , undefiend, symbol, Bigint


// javascript is dynamic type language
//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime

const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id=== anotherid);// it give false
const bignumber = 5828954895899n;


// Non primitive (reference)
// object , array , function

const myfunction = function(){
    console.log("hello")
};
console.log(typeof myfunction);// it will return function
