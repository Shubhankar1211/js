//ES6 ke badd

// this is class way
/*
class user {
    constructor(username ,branch ,password){
        this.username =username
        this.branch =branch
        this.password =password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai","chai21224","123")
console.log(chai.encryptPassword()); // here we got the paassword
console.log(chai.changeusername());
*/


// behind the seen 

function user1(username,branch,password){
    this.username= username
    this.branch=branch
    this.password=password
}

user1.prototype.encryptPassword = function(){
    return `${this.password}`
}
user1.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user1("tea","ece",1234)
console.log(tea.encryptPassword());
console.log(tea.changeusername())