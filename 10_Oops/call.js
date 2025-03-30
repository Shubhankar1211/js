function setUsername(username){
    this.username = username
    console.log("called")
}

function details(username ,branch , rollno){
    setUsername.call(this,username)// yha hame sirf uska refrence diya h use call anhi kiya h use use karne ke liye hame uska refrence hod karke ke rkah na padega uske loiye  ham call use karte h // fri bhi naayega kyo ki context sew delete hojata h ukse liye hame this use karna padta h 
    this.branch = branch
    this.rollno =rollno
}

 const user = new details("sbc","bce",45)
 console.log(user)
 // call jo h hamra currect excuting context kis or ko pass kar deta h 