class user {
    constructor(username){
        this.username =username
    }
    loggme(){
        console.log(`Username is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username,branch,roolno){
           super(username) //ye sab set kar deta this wagerha sab
           this.branch =branch
           this.roolno=roolno
    }

    addmarks(){
        console.log(`your marks ${this.username}`)
    }
}

const chai = new teacher("chai","abc",1234);
chai.addmarks() 

const chai1 = new user("chai1","abc",1234);
chai1.loggme()
console.log(chai===chai1);
console.log(chai===teacher);
console.log(chai instanceof teacher);
console.log(chai instanceof user);

