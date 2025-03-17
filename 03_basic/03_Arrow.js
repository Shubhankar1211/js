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

