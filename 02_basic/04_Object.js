const tinderuser = new Object(); // it is a sigleton object
const tinderuser1 = {}; // it is not  singleton object
console.log(tinderuser); // {}
console.log(tinderuser1); // {}

// an eady way to create an object 
const ece = {};
ece.name = " shubhankar chauhan";
ece.enrollement_number = "00115002823";
ece.rank = "second";
console.log(ece);

const student_detials ={
    email : "utkarshdon909008@gmail.com",
    student_fullname : {
        frist_name: "utkarsh",
        second_name: "kumar",
    }
}
console.log(student_detials);
console.log(student_detials.student_fullname);
console.log(student_detials.student_fullname.frist_name);


const obj1 = {
    name : "aparmit",
    branch : " ece-2",
}
//console.log(obj1);

const obj2 = {
    name : "soumya",
    branch : " ece-1",
}
//console.log(obj2);

//const obj = {obj1 ,obj2};
//console.log(obj); // it return object of object 

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
console.log(typeof obj3); // object


const num1 ={ 1 : "a" , 2 : "b"};
const num2 ={ 3 : "c" , 4 : "d"};
const num3 = Object.assign({},num1 ,num2); // agar ham open parnethese nahi denge to sari values num1 me ja rahi h agar denge to vo {} si me ajyegi or ye source ban jaeyga
console.log(num3);

const num4 = {...num1,...num2};
console.log(num4);// ... ye hi us ekarna h 


// this is how we got the data from the database
const user = [
    {
        id :1,
    },
    {
        id : 2,
    },
    {
        id : 3,
    },
]

user[1].id
console.log(ece);
console.log(Object.keys(ece)); // directley access the keys of object in the form of the array
console.log(Object.values(ece));
console.log(Object.entries(ece));
console.log(ece.hasOwnProperty(`islogged`)); // to find if key is presnet in it or not

