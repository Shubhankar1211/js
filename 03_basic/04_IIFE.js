// Immediately Invoked Function Expressions(IIFE)

// jo fundtion immediately select hojaye  ki  global scope ke poluiotn s eproblem hoti h kaai bar to su global scope ke polluiton ko hane ke liye hamne IIFE ko use kiya h 

function code(){
    console.log("connected");
}
code(); // this is the simple way to 



// here we write in fucntion in first pernthises and second is for execution part ()()
(function code3(){   // ye ek name IIFE h kyo ki isme fucntion ka name likha huaa h 
    console.log("connected2")
})() ;


// another version of arrow functions by using ()()
(  () => { // ye ek unname IIFE h kyo ki isme fucntion ka name nahi likha jata h 
   console.log("connected3");
}  )();



(  (name) => { // ye bhi unname IIFE h 
    console.log(`connnected3 ${name}`);
 }  )("shubhankar chauhan");