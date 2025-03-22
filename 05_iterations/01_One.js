// for loop
for (let index = 0; index <= 10; index++) {
    const element = index;
    if(index==5){
        console.log("5 is the best number")
    }
    console.log(element);
}


for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        //console.log(`inner loop value ${j} and ineer loop${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
}


let myarray = [1,2,3,4,5]
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);
}


// break and continue

for (let i = 0; i < 20; i++) {
    const element = i;
    if(element==5){
        console.log("we detected 5");
        break;
    }
    console.log(`value of i is : ${element}`);
}

/* output
value of i is : 0
value of i is : 1
value of i is : 2
value of i is : 3
value of i is : 4
we detected 5
// here  it stoped at 5 beacuse we have use the break condition
*/

for (let i = 0; i <= 20; i++) {
    const element = i;
    if(element==5){
        console.log("we detected 5");
        continue;
    }
    console.log(`value of i is : ${element}`);
}


/*
output
value of i is : 0
value of i is : 1
value of i is : 2
value of i is : 3
value of i is : 4
we detected 5
value of i is : 6
value of i is : 7
value of i is : 8
value of i is : 9
value of i is : 10
value of i is : 11
value of i is : 12
value of i is : 13
value of i is : 14
value of i is : 15
value of i is : 16
value of i is : 17
value of i is : 18
value of i is : 19
value of i is : 20

continue ek bar chhod deta h or use iskip kar deta h
*/