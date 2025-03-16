// scope ->>>>>> {} curly braces hi scope hota h object me bhi hote h par vo object decelartion hote h 
let d = 10;
const e =20;
var f =30;

console.log(d);
console.log(e);
console.log(f);



var c =300;
let a  =300;  // ye global scope h   ye value toaally hi alag h jo loop scale me tha 


// if andar jo bhi h use block scope khate h or jo  loop ke andar valeu rakhte h vo bha nahi jani chiye 
if(true){ // agar yha true likh diya to loop me jounga hi jounga 
    let a = 40;
    const b =50;
    var c =60; // agar me yha var declare karo ya na karo uppee wali problem ayegi hi aeygi
    console.log("inner value :" ,a);
}



console.log(a);
//console.log(b);
console.log(c); // iska answer 30 aygega

function one (){
      const username = "shubhankar chauhan";

       function two(){
          const surname = "chauhan";
           console.log(username);
       }
      // console.log(surname);// ye scope ke bhar h isliye ye error dega 

       two();   // or code line by line execute hota h isliye ye execute nahi huaa h 
}

one(); // phel ye execute hua h  iske baad two exexute hoga agra two ko hat  denge to kuch kyo nahia ayega kyo ki ahmen use call nahi kiya h 






if(true){
    const gamename ="deadly0g";
    if(gamename === "deadly0g"){
        const game = " rdr 2";
        console.log(gamename + game); // ye exexute ho jayega kyo ki ye inner scope ke andar h or chota wala scope bade wale scope koa access kar leta h
    }
    //console.log(game); ye scope ke bhar h islieye ye kabhi bhi execute nahi hoga 
}

//console.log(gamename); // ye bhi acess nahi hoga kyo ki ye bhi scope ke bhar h





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//



// imp question 

