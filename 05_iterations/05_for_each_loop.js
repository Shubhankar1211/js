const arr2= ["a","b","c"];
arr2.forEach(  function (item) { // isme fucntion ka name likhte nahi h kyo ki ye ek call back function h
    console.log(item);
    
})

// is ham arrow fucntion ke roop me bhi likh sakte h 
arr2.forEach(  (val) => {
    console.log(val);
    
})

// ye ek or tarika h 
function printme(item){
    console.log(item);
}
arr2.forEach(printme);


arr2.forEach( (item, index,arr)=> {
       console.log(item ,index ,arr);
})

/* 
this is the output 
a 0 [ 'a', 'b', 'c' ]
b 1 [ 'a', 'b', 'c' ]
c 2 [ 'a', 'b', 'c' ] */


const arr3 = [
    {
    name : "shubhankar",
    branch: " ece",
    },
    {
        name: "utkarsh",
        branch: " ece",
    }
]

arr3.forEach( (item)=>{
    console.log(item.name);
})