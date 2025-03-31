const User ={
    _name :"shub",
    _password : "abcd",

    get name(){
        return this._name.toUpperCase()
    },

    set name(value){
        this._name =value
    }
}

const obj1 = Object.create(User)
console.log(obj1.name)