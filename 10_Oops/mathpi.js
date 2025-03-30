// so this is the whole interview answer
console.log(Math.PI); // iski universal value 3.14 hoti h 
Math.PI = 5
console.log(Math.PI) // or isse ham overwrite nahi kar sakte h ya par bhi 3.14 hi ayegi phale se hamen use 5 karne ki koisi ki h 

// ab is khani ka bheind the seen dekhte h 

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI") // math to ham direct likh skate h par jo hame property deni h uski key ke upper value de rahe h  
console.log(descriptor)
// it will give this output 
//{
   // value: 3.141592653589793,
   // writable: false,  //kitni bar tum ise overwrite akrne ki kosis par nahi kar paoege
   // enumerable: false,
   // configurable: false
  //}

//const myNewobject = Object.create()// by deafult () iske ander value null hoti h 


//simple object task is to make hardocre descriptor value
const dm = {
    name: "shubh",
    branch : "ece",

    orderChai: function(){
        console.log("chai nhi bni");
    }
}
console.log(dm)
// kya uski bhi descriptor property h agar h to unhe ham kasie set kar ste h 
// phle ye batoo ki vo properties accessible h bhi ya nhai iska answer h yes or vo niche likha h 
console.log(Object.getOwnPropertyDescriptor(dm,"name"))
//output
//{
   // value: 'shubh',
   // writable: true,
   // enumerable: true,
   // configurable: true
 // }

 // first question ka answer h ye ham hardcore value set kar sakte h 

 Object.defineProperty(dm,"name",{
   // writable:false,
   // enumerable : false,
      enumerable : true, // niche chalene kiye loye isee tru kiya h
 })

 console.log(Object.getOwnPropertyDescriptor(dm,"name"));


for (let [key, value] of Object.entries(dm)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
