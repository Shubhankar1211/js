class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return "123"
    }
}
const abc =new user("abc")
//console.log(abc.createId())


class teacher extends user{
    constructor(username,branch){
           super(username) //ye sab set kar deta this wagerha sab
           this.branch =branch
    }
}

const xyz = new teacher("xyz","123445")
xyz.logme();
