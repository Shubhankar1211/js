// use of map
const num1 = [1,2,3,4,5,6,7,8,9]
const n1 =num1.map( (num) => num +10)
console.log(n1);



//chanoing of map and filter
const num2 = [1,2,3,4,5,6,7,8,9]
const n2 =num2
.map( (num) => num * 10)
.map( (num) => num +1)
.filter((num) => num >=40)
console.log(n2); // agar condition match nahi hote h to ye empty retun kar dete h