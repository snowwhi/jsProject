class user {
    constructor(name,email,password) {
        this.name=name
        this.password=password
        this.email=email
    }
    encryptpassword(){
        return`${this.password}12###`
    }
    changeuser(){
        return `${this.name.toLocaleLowerCase()}`
    }
}
let user1=new user('KHADIJA','EXAMPLE@GMAIL.COM',1234)
console.log(user1);
console.log(user1.changeuser());
console.log(user1.encryptpassword());

// under the hood 
function userhood(name,email,password) {
     this.name=name
        this.password=password
        this.email=email
}
Object.prototype.encryptpassword=function(){
        return`${this.password}12###`
    }
    Object.prototype.changeuser=function(){
        return `${this.name.toLocaleLowerCase()}`
    }
let hood1= new userhood('asia','random@gmail.com','6stdd')
console.log(hood1);
console.log(hood1.encryptpassword());
console.log(hood1.changeuser());
let x=Math.PI
console.log(x);
let y=Math.ceil(x)
console.log(y);




