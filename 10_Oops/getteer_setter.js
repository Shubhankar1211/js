class user{
    constructor(name,password){
        this.name=name
        this.password=password

    }
    get password(){
        return this._password.toUpperCase()
    }
    
    //this will give you he error maximum call stack size exceeded isloye aatta h kyo ki set and constructor race me lag jate h password set karne ke or call stack bhar deta h 
    set password(value){ // to overcome this problem we have to make new variable which would like to be set here we change ther variable but does not change in the get request so there we have to change  also
        this._password = value 
    }

}

// bheind the seen ab cosntructor password ko set anhi kar rha h sirf email ko set kar raha kyo ki password ko hamen set kard iya h
//set to ham abc kar rahe par getse hame mil uppercase me raha h 
const obj1 = new user("shubhankar","abc")
console.log(obj1.password)