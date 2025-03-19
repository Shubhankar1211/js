const user = {
    name : "shubhankar chauhan",
    price: " 999",
    welcome : function(){
        console.log(`${this.name}, welcome to our website`); // jab bhi hame current contxet ko reffer kar e rahe h wha this use kar te h /// ham yha direct user nahi likh sakte /// this.user likh ke value acces hoy gi yha
        console.log(this); // ye pura object print kar dega 

    }
}
/*
ye otuput h console.this ka

shubhankar chauhan, welcome to our website
{
  name: 'shubhankar chauhan',
  price: ' 999',
  welcome: [Function: welcome]
}
utkarsh, welcome to our website
{ name: 'utkarsh', price: ' 999', welcome: [Function: welcome] }*/



user.welcome()
user.name="utkarsh";
user.welcome();
console.log(this); // this give empty object hame ode envoremnt me h to this empty ko reffer kar raha h empty object ko samse jyada jo global object h vo window object h 



//  ++++++++++++++++++++++++++++++ arrow ++++++++++++++++++++++++++++++ //


function code(){
  let uname = "shubhankar chauhan"
  console.log(this.uname); // it shoes  undefiend we can't accesss by this int he function it only run it only work in the objects.
}
code();// it shows many functions 
   



const code1 = function(){
  let uname = "shubhankar chauhan"
  console.log(this.uname); // it shoes  undefiend we can't accesss by this int he function it only run it only work in the objects.
}
code1();// it shows many functions 



// this is the same as upper fucntion but we write this with the help of arrow function
const code2 =()=>{
  let uname = "shubhankar chauhan"
  console.log(this.uname); // it shoes  undefiend we can't accesss by this int he function it only run it only work in the objects.
}

code();// it shows many functions 



// simple example of arrow fucntion
const code4 = (num1 ,num2) => {
  return num1+ num2;  // agar curly braces use huyii to return keyword likhna hi padega warna undefeind ayega hi ayega 
}

console.log(code4(5,5));



// we can make arrow fucntion into a implicit function by removing the {};
//const code5=  (num1,num2) => num1+num2; // ye 
const code5=  (num1,num2) => (num1+num2); // agar parnethiesis likhe to  return keyowrd nahi likhna padega 
console.log(code5(6,6));

const code6 = (num1,num2) => {user1 : "shubhankar chauhan"} // bina parentheis ke run karnege to ye undefiend show karnega
console.log(code6());


const code7 = (num1,num2) => ({user1 : "shubhankar chauhan"}); // here it will work because we have used perntheises.
console.log(code7());