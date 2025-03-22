const name = "ayush"; // agar string h to man liya gya h ki vo true h 
if(name){
    console.log("got user name");
}
else{
    console.log("did'nt get your username");
}


const name1 = ""; // ye false h
if(name1){
    console.log("got user name");
}
else{
    console.log("did'nt get your username");
}



const name2 = []; //  ye true h
if(name2){
    console.log("got user name");
}
else{
    console.log("did'nt get your username");
}


// falsy value 

// false , 0 , -0 ,bigint 0n ise 0n ko bhi flasy value hi manajata  ,"" , null , undefiend , Nan

// truethy value
// "0", 'false', " ", [] ,{} , funtion(){}


const name4 = [];
if(name4.length ===0){
      console.log("array is empty")
}



// Nullish Coalescing Operator (??):null undefined
// ye asal me null opertaor ka safety check karta h agar kahi null aajaye ot program rull nahi kare

let val1;
val1 =5 ?? 10;
val2 = null ?? 10;
val3 =undefined ?? 15






console.log(val1); // output is 5
console.log(val2); // output is 10
console.log(val3);


// null coalesing operator and terinary operator dono alg h
//condition ? true : false

const teaprice =100;
teaprice => 80 ? console.log("less than 80") : console.log("more than 80");