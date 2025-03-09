// here we are learning about the objects
// singleton constructor se agar object banate h to singleton banta h 

console.log("hello world");

// ke symbol lena h usko define karna h usko keys ki tharha define karna h fir object me aceess karna h
const mySym = Symbol("key1");

let obj = {
    name : " shubhankar chauhan", // ye name ko bhi string hi man ta h behind the secen ye ek string ki tharha track ho raha h
    "branch": " ece-1",
    [mySym]:  "mykey1", // ye yha use to hojayega par isnka data type stirng hi rahega symbol nahi banega is eror ko hatne ki liye [] ye use karte h 
    attendece: [1,2,3,4,5,6]
}
console.log(obj.name);
console.log(obj["name"]); //  ye square notation h if we do not pass string it return the error
console.log(obj.branch);// agar key hi hamne stirng bnana di to use hame .se access nahi kar payenge use bas ham bracket method se access kar sakte h iska ek point upper likha h 
console.log(obj.mySym); // [Symbol(key1)]: 'mykey1' ye ye print karega or agar hamne braket hata deya to ye ifr ye print karega  (key1): 'mykey1' 
console.log(typeof mySym);// symbol

obj.name = "guru singh";
//Object.freeze(obj); // iski wajah se eror aya tha kyo ki freeze the or fucntion access nahi kar peyga  
obj.name = " shubhankar chuahan";
console.log(obj); // yha name change nahi huaa kyo ki hmane us freeze kar diya tha

obj.greeting = function(){
    console.log("happy birthday");
}


obj.greetingtwo = function(){
    console.log(`happy birthday , ${this.name}`);
};
console.log(obj.greeting); // ye ye print kar dega [Function (anonymous)] ki fucntion h par vo abhi execute nahi huaa h 
console.log(obj.greeting()); // ye eroor ayega ki ye abhi ek function nahi h
console.log(obj.greetingtwo());



