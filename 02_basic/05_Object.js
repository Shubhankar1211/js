const student ={
    name: "abc",
    class : "8",
    mob_no: "8398209933",
    rank: "first",
}

//  we cant use this method but for clean code we use anther method.
//student.name = "Diwakar Chauhan";
//console.log(student);

// ham likhte h const {} = jah se uthana h likhe here it is student object 


// easily these are destructure of obejct 
const {name} = student;
console.log(name);
const {name: student_name} = student; // here we change the key name to studnet_name 
console.log(student_name);




