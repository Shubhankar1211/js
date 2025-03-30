let myname = "shubhankar      "
console.log(myname.trim().length) // it will trim down the spaces and return the length

let othername = "utkarsh       "
console.log(othername.trueLength); // muje ek method  chiye jha par bhi string ke baad ekxtra space  ho wha ke bideafult ek property aajye true length or asrre spce kam karde or length rpint kar de



let myHeros = ["thor","spiderman"]// here we declare an array
let heroPower = { // hee we decalre an obejct 
    thor: "hammer",
    spiderman : "sling",

    getspidypower : function(){
        console.log(`here is your spiderman power ${this.spiderman}`)
    }
}
// here we are injecting methods in object
// here we have to create a method in the object so that this method will shown in every where like in object array etc
Object.prototype.shubhankar = function(){
    console.log('shubhankar is present everywhere');
}
// upper wale fucntion ki kya khahani h ki dab chize obejct se hote hyee ajti h or object se upper koi  super protoype nahi hota h hamne yah sabse tp level ki ko access kar liyea h matlab object ko or usme new property add kar deta hu 
heroPower.shubhankar() // to hero power me hamra banya huaa object agyy kya vp arrray mebhi ayega check karte h 
myHeros.shubhankar() // ye arrry me bhi agya kyo ki back me array bhi object se hi jata h 

//here we injecting methods in array
Array.prototype.utkarsh =function(){
    console.log('utkarsh don h ham');
}

myHeros.utkarsh() //yha to chal jaeyga kyo ki ye ek array h 
heroPower.utkarsh() // par obejct par nahi chalega 