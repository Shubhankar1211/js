// here  we built a basic function
function gretting(){
    console.log("Good Morning");
}

gretting // it only refernce of a function 
gretting() // it is basically execution of the function


function calculatar(number1 ,number2){ // these are parameters 
    console.log(number1+number2);
}

calculatar();// if we run this it show the nan we have'nt pass any arguemnt in it
calculatar(4,6);//10
calculatar(4,"6");//46 // so it nsometimes creates the probelem beacuse of daattype for this over coem ewe dirctly use if condition
calculatar(4,"a");//4a
calculatar(4,null); //4


function calculatar(number1 ,number2){ // if we want ot return the r result we can use thsi method 
    let result = (number1+number2);
    return result; // return karne ke add kuch bhi ye console.log ya retun nahi karega 
    console.log("hello");
    // return  numebr1 + number 2 ;
}

const result = calculatar(10,10);
console.log("result : " , result); // if we think it store the result no it return the undefiend hame console log se store nahikar skate uske liye return likhna padta h

function gamer(username){
    if(!username){
        console.log("please enter your username beacuse you have not entered it")
        return
    }
    return `${username} you are loggedin`;
}
gamer("deadly0g"); //it will give none beacuse you ahve not print the fucntion it only return thr function
console.log(gamer("deadly0g"));
console.log(gamer("")); // output you are loggedin
console.log(gamer()); //  undefined you are loggedin





function stockadditon(...num1){ // ... here make the output int the array format of the number the array
    return num1;
}
console.log(stockadditon(100,200,300,400,500));







const obj = {
    name: "backend",
    class: "frontend",
}

function handelobject(anyobject){
    console.log(`main role is ${anyobject.name} and second role is ${anyobject.class}`)
}

handelobject(obj);
handelobject({
    name:"bhsabd",
    class:"jfnjs",
});


const array = [1,2,3,4];
function handelarray(anyarray){
       return anyarray;
}

console.log(handelarray(array));
console.log(handelarray([5,6,7,8]));