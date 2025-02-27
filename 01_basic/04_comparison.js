console.log( 2 > 1)
console.log( 2 >= 1)
console.log( 2 < 1)
console.log( 2 == 1)
console.log( 2 != 1)

console.log("2" > 1); // it will return true because js automatically convert strign to number
console.log("02" > 1);// it also retrun true
console.log( null > 0);// fasle
console.log( null == 0);// false
console.log( null >= 0); // true // comparisons converter null to a number , treating it as 0 that why (3) null >= 0 is true and null> is false
console.log(undefined==0);// false
console.log(undefined>0);//false
console.log(undefined<0);//false

// === it is strict check it also check datavalue and datatype

console.log("2"===2);

