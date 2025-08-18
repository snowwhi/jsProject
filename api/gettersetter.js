class user {
    constructor(name,password) {
        this.name=name
        this.password=password
    }
    set password(value){
this._password=value
    }
    get password(){
        return null
    }
}
let user1=new user('khadija','abc')
console.log(user1.password);
function x() {
    let z=123
    function displayz() {
        console.log(z);
        
    }
    return displayz
}
 const newfunc=x()
 newfunc()