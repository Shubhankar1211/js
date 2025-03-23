// for of
const arr= [1,2,3,4,5];
for (const num of arr) { // object means kis ke uper loop lagana h isee purane wale obeject se compare na karee.
    console.log(num);
}


const greeting= " hello world";
for (const i of greeting) {
    console.log(i);
}


// Maps 
const map = new Map()
map.set('in' , "indian")
map.set('fr' , "france");
console.log(map);

for (const key of map) {
    console.log(key);  // ye pura ka pura array print kar deta h 
}


for (const [key , value] of map) {
    console.log(key, ':' , value); // ye sirf key anad values deta h
}

/*
const obj1 = {
    name : "shubhankar chauhan",
    branch : "ece",
}

for (const [key,value] of obj1) {
     console.log(key, ':' ,value) // ye error show karega ki ham object ko ham iterate nahi kar sakte h for of loop se
}
*/

