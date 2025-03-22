// if 

/// to exexcute hoga hi hoga 
if(true){

}
 
// ye kabhi bhi exexcute nahi hoga
if(false){

}

// 
if(2=="2"){
    console.log("executed");//it return exexuted but as we can see there both data types are diffrent but if i want strict check we can use ===
}

if(2==="2"){
    console.log("executed");//ye exexcute nahi hoga //!== ye neagative sign check kar leta h
}



const temperature = 41;
if(temperature<50){
    console.log("less thean 50");
    
}
else{
    console.log("temperature is greater tan 50")
}
console.log("happy"); // ye to hamesha execute hoga hi hoga kyo kiye fi loop se bhar h 




const score = 200;
if(score>100){
    const power ="fly";
    //console.log(power); 
    console.log(`user power : ${power}`); // we can print hte power variable by both the method
}
//console.log(power); // it wil show error because it is not defiened


const balance  =1000;
if(balance > 500) console.log("test") , console.log("test2"); // aise bhi likh skate h par , ke bad code likhna immature tarika h



const gamescore = 600;
if(gamescore <500 ){
    console.log("less than 500");
}
else if(gamescore<750){
    console.log("less than 750");
}
else{
    console.log("more than 750");
}



// how if else work in real world 

const userlogined = true;
const debitcard = true;
const email = true;
if(userlogined && debitcard){
    console.log("it can join are show");
}

if(email || userlogined){
    console.log("yes it can login");
}
