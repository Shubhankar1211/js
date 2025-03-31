//this is the old methos 
function User(name,password){
    this._name=name,
    this._password=password,

    Object.defineProperty(this,'name',{
        get : function(){
            return this._name.toUpperCase()
        },
        set : function(value){
            this._name = value
        }
    })

    Object.defineProperty(this,'password',{
        get : function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value
        }
    })
}

const obj2 = new User("shubhankar","abcd")
console.log(obj2.name)
console.log(obj2.password)


