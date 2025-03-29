// firstly we will learn how to make or create the promises

// a promise is an object representing the eventual completion or failure of an asynchronous operations. 
// p promise is a returned object to which you can attach callbacks isnetesd of passing callbacks into a fucntion
//
//
//

const promiseOne = new Promise(function(resolve, reject){
     //Do an async task
     //DB calls , crpto ,network 
     setTimeout(function(){
        console.log('async task is completed')
        resolve() // yha call karne se ye phle promise print hoga fir consumed hoga 
     },1000)
    // resolve() // agar hane ye scope ke bahr declare kar diya to phle hi promise consumed ho jayega uske baad promise print hoga 
}) 
promiseOne.then(function(){
    console.log("promise consumed") // this romise will not be consumed untill we don note call the resolve because then and resolve has to ve connected 
})



// this is the second way
new Promise(function(resolve,reject){
      setTimeout(function(){
        console.log('second async task is completed')
        resolve()
      },1000)
}).then(function(){
    console.log('async 2 is resolved')
})


// this is the way how we get the data 
new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({name:"shubhankar"})
    },1000)
}).then(function(user){
    console.log(user)
})



//
new Promise(function(resolve,reject){
    setInterval(function(){
       let error = false
       if(!error){
        resolve({name:"utkarsh"})
       }
       else{
        reject('ERROR: something went wrong')
       }
    },1000)
}).then(function(user){
       console.log(user);
       return user.name
}).then(function(name){
    console.log(name);
    
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the promise is either resolve or rejected")
})
//console.timeLog(name) // through this way we cant assess the name 



//  
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({name:"soumya", branch : "ece"})
        }
        else{
            reject("ERROR, js went wrong")
        }
    },1000)
})

/*
async function consumepromiseFive() {
    const response = await promiseFive
    console.log(response);
}
consumepromiseFive() // ye nahi chaleg kya ki upper false h or ham diectly error ko handel nahi kar skate 
*/

async function consumepromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error) // is bar gracefull eroor handel hoaa h waran upper wlase eror aa rha tha 
    }
}
consumepromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.