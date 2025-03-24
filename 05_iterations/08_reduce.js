// example of reduce  accumulator, curval 
const num1 = [1,2,3]
const n1= num1.reduce( function(acc,curval){
    return acc + curval;
},0) // here 0  is the intital value of the accumulator beacuse we have ti initialisze it
console.log(n1);


const num2 = [2,3,4]
const n2 = num2.reduce( (acc, curval)=> acc+curval ,0 )
console.log(n2);



