const names = ["a","b","c"];

names.forEach( (item)=>{
   console.log(item);// it will give abc
})


const username = names.forEach( (item)=>{
    console.log(item); // it will give abc
})
console.log(username); // it show undefiend beacuse we don not apply the return function


const username1 =names.forEach( (item)=>{
    console.log(item);
    return item    // gar kuch retun karna h to manual hi hame kanra padata h par ye abhi bhi undefiend hi return karega kyo ki for loop kuch retun nahi kata h 
})
console.log(username1);



// filter expalantion
const num1 = [1,2,3,4,5,6,7,8,9,10]; //it will give return values so we have to store it some where and print it
const nums= num1.filter( (num) => num > 4) // it will give 5,6,7,8,9,10 
console.log(nums);


const num2 =[1,2,3,4,5] // kyo ki hamne yha scope start kardi thi isliye hame yha return keyword likhna hi padega 
const n2= num2.filter( (a)=>{ return a <3 }) // it show empty array [] beacuse it is na implicit function we have to reutn value for it we have to tye return
console.log(n2);


// using for each as same techniye as filter
const n3 =[]
const num3 =[1,2,3,4,5]
num3.forEach((num) =>{
    if(num<2){
        n3.push(num);
    }
})
console.log(n3)


const books = [
    {
        title: "The Alchemist",
        genre: "Fiction",
        publish: 1988,
        edition: 2013
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        genre: "Non-Fiction",
        publish: 2011,
        edition: 2015
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Classic",
        publish: 1960,
        edition: 2010
    },
    {
        title: "1984",
        genre: "Dystopian",
        publish: 1949,
        edition: 2003
    },
    {
        title: "The Pragmatic Programmer",
        genre: "Technology",
        publish: 1999,
        edition: 2019
    },
    {
        title: "Clean Code",
        genre: "Programming",
        publish: 2008,
        edition: 2008
    },
    {
        title: "Atomic Habits",
        genre: "Self-Help",
        publish: 2018,
        edition: 2018
    },
    {
        title: "The Psychology of Money",
        genre: "Finance",
        publish: 2020,
        edition: 2020
    },
    {
        title: "Harry Potter and the Sorcerer’s Stone",
        genre: "Fantasy",
        publish: 1997,
        edition: 2015
    },
    {
        title: "The Art of War",
        genre: "Philosophy",
        publish: 1500,
        edition: 2016
    }
];

let userbook=books.filter( (bk) => bk.genre === 'Fantasy' )
userbook= books.filter( (bk)=> bk.publish <=2000)
userbook= books.filter( (bk)=> bk.publish <=2000 && bk.edition>=1990)
console.log(userbook);








