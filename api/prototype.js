// injecting object properties to function 
function user(name,score) {
    this.name=name
    this .score=score
}
user.prototype.increment=function () {
     this.score++
    // return is must
    return this.score
}
user.prototype.printme=function () {
    console.log(`score is ${this.score}`);
    
}
const user1= new user('khadija',25)
const user2=new user('khadija2',205)
 console.log(user1.increment())
user2.printme()

// new function
// assign value to object accessing everywhere
function lala() {
    console.log('user');
    
}
let array=[1,2,3,4,4]
let obj={
    hi:12,
    bye:23
}
Object.prototype.lenght=function() {
    console.log('i am present everywhere');
      
}
lala.lenght()
array.lenght()
obj.lenght()
String.prototype.true=function () {
  
   console.log(`${ this.trim().length }`);
}
'khadija'.true()
"fghdashdg     ".true()
'12345                            '.true()