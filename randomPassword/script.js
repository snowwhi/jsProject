// grab
let copy=document.getElementById('copy')
let generate=document.getElementById('generate')
let Password=document.getElementById('Password')
// create
const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase='abcdefghijklmnopqrstuvwxyz'
const number='123456789'
const Symbol='!@#$%^&*()_+=.,:;'
const allCharacter=upperCase+lowerCase+number+Symbol
const length=16
let password=""
function GeneratePassword() {
    password = "";
    while (length > password.length) {
        password += allCharacter[Math.floor(Math.random() * allCharacter.length)];
    }
    return password; 
}
generate.addEventListener("click", function () {
    GeneratePassword()
      Password.value=`${password}`
    }, false);
// copy function
copy.addEventListener('click',function () {
    Password.select()
    document.execCommand('copy')
},false)