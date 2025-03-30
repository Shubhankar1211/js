function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2;
console.log(multiplyBy5(5)) // 25
console.log(multiplyBy5.power) // 2
console.log(multiplyBy5.prototype) // {} ye prototype kuch method hi nahi balki kuch properties bhi deta h or thsi ka context bhi available hota h yha
// technically js me har chiz object hi hoti h kyo ki end og the day har chiz jake milti h object se

function createuser(username , score){
    this.username =username
    this.score= score 
}
 createuser.prototype.increment = function(){
    this.socre++
 }

 createuser.prototype.print = function(){
    console.log(`score is ${this.score}`)
 }

 const chai = new createuser("chai",25) // ye kar ke error ati h ki you cannot read properties of undefiend but prototype me to properties hoti h to ye kyo aa rha bh ?? answer agli line me h
 const tea = new createuser("tea",250) // properties inject huii h jab hamne funtion se chai me vlaue transfer kito apne use btya nahi ki additional propery ayyi h ye btatna padega ye n=btana ke akm new keyword karta h  

 chai.print();

 // js classes ki through constructor fucntion anhi deti h balki new keyword ke thorugh deti h 
// upperjoham prototype kar rhaethe vo hawa me tha likin jab hmene new keyoeword use kiya to usen ek new object liya fir usne use me ek prototype inject kiya fri mene kuch method bhi to defiene kiya h fir usne vo method bhi inject 
// fir constructor ko call kar diya jata h fir usme jo bhi this wale object h vo ad kar deya jate h 





/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
