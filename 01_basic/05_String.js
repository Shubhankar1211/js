// this is old method of writing a string
const name ="shubhanakar chauhan";
const surname = "chauhan";
console.log(name + surname + "20-05-2004")

// string interpolation modern way of writing the strings
console.log(`my name is ${name} and my surnamme is ${surname}`)

const gamename= new String(`Deadly-0g-pro`)
console.log(gamename[0]);
console.log(gamename.__proto__);// it will return this -: {}
console.log(gamename.length);
console.log(gamename.toUpperCase()); // it will not change original string
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));


const newString = gamename.substring(0,5);// isme chahe negative value dal do shuru me par ye hamesha postive hi dega start se 
console.log(newString);// deadl

const anotherString = gamename.slice(-9,5); // l
console.log(anotherString);
  
const newStringOne = "   shubhankar   ";
console.log(newStringOne.trim());

const url = "http://shubhankar.com/shubhankar%20chauhan";
console.log(url.replace('%20','-')); // it will replace and give http://shubhankar.com/shubhankar-chauhan
console.log(url.includes('chauhan'));//true
console.log(gamename.split('-')); // it will convert string into array on the basis of string.