//array 
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

const myArray = [0,1,2,3,4,5,];
const myheros = ["karn" , " arjun"];
console.log(myArray[0]);

const newArray= new Array(0,1,2,3,4,);
console.log(newArray[1]);


// array metthods;

myArray.push(6);
myArray.push(7);
myArray.pop();//remove last value from the array
myArray.unshift(9);// it put value at the starting point of the array
myArray.shift();// it remove the value from the starting of the array
console.log(myArray);
console.log(myArray.includes(4)); //true
console.log(myArray.indexOf(3));//3

let newArray1 = myArray.join();
console.log(myArray);
console.log( typeof myArray);// it ocnvert arrays into string


// slice , splice
console.log("A" , myArray)
const mna = myArray.slice(1,3); // it cant manipulate the array
console.log(mna);
console.log("B" ,myArray)// yha to array as it is ajayega no change

const myn2 =myArray.splice(1,3);
console.log("C" ,myArray);// yh array manipulate ho jayega
console.log(myn2)// dierctly change the array or manuplate 

/*slice or splice ke andar differnce bataiye interview question
 jo last me ran ge include nahi huii h slice me or splice me last range include ho gyi h ye bilkul galat answer h
 splice me pure splice operation hi nikal jata h or array manipulate ho jata h
 */



/* 
A [
  0, 1, 2, 3,
  4, 5, 6
]
[ 1, 2 ]
B [
  0, 1, 2, 3,
  4, 5, 6
]
C [ 0, 4, 5, 6 ]
[ 1, 2, 3 ]*/





