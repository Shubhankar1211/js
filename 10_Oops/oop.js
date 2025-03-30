// ye srif object literal ka part tha 

const user = {
    username: "hitesh",
    branch: "ece",
    signedIn : true,

    getuserdetails : function(){
        //console.log("got user details")
        //console.log(`Username : ${this.username}`)
        console.log(this); // it will give full current context like it have the access of your ful object and it eill print that
    }
}
console.log(user.username)
console.log(user.getuserdetails()) // ye vlaue bhi de raha or u defiend bhi aa rha h 
console.log(this)// it will give this {} use pta hi ahi h kis context em dena h or this ek object h
// agar same chiz ham browser me akrte h to hame open parenthesis nahi milte h balki window milti h puri kyo ki brower me duniya bhar ki apii ka acess hota h 




const promiseOne = new Promise((resolve, reject) => {
    
})
// so here new is the constructor function new context banane ke kaam atte h

function user3(username , branch , signedIn, gretting){
    this.username = username
    this.branch =branch
    this.signedIn= signedIn
    this.gretting = function saywelcome(){
        console.log(`welcome : ${this.username}`)
    }

    return this // ise likhe yha na likhe jab bhhi vlaue milte hi  ye implicitely defiend hota hi h 

}
//const u3 = user3("shubhankar","ece","true")
//const u4 = user3("utkarsh","ece","true") // to ye apke uer3 ki vlaue ko overwrite kar dega isse banche ki liye ham new keyword use karte h 
//console.log(u3)

const u3 = new user3("shubhankar","ece","true")
const u4 = new user3("utkarsh","ece","true")
console.log(u3.constructor) // constructor property hoti h reference khud hi ke bare me [Function: user3]
console.log(u4)