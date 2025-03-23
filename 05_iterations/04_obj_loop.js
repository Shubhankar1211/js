//for in
const obj1 = {
    name : "shubhankar chauhan",
    branch : "ece",
}

for (const key in obj1) {
    console.log(key); // it will print keys if we want to print the key and values it will show in net loop 
}


for (const key in obj1) {
    console.log(obj1[key]);// it will give values
}

for (const key in obj1) {
    console.log(`${key} is  ${obj1[key]}`) // it will give you both key and value 
}  

const arr2= ["a","b","c"];
for (const key in arr2) {
    console.log(key); // it will give 0 1 2 which is the index of the number this is the major differnce int the in an of loop in of we get the direcit value but in the in loop we get index 
    
}

for (const key in arr2) {
    console.log(arr2[key]); // it will give the value
    
}

// mapp ke iander iteration nahi kar sakte foor in loop se
const map = new Map()
map.set('in' , "indian")
map.set('fr' , "france");
console.log(map);

for (const key in map) {
    console.log(key);
    
}