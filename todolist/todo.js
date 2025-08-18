// grab
 const user= document.querySelector('#userinput');
let button =document.querySelector('button')
let container =document.querySelector('#imp')

// main logic
button.addEventListener('click',function () {
    if (user.value==="") {
       alert("please write anything ")        
    } else {
        let li=document.createElement('li')
        li.innerText=user.value 
        let span =document.createElement('span')
        span.innerHTML="&#10006;"
        
        li.appendChild(span)
        document.querySelector('ul').appendChild(li)
    }
    saveToLocalStorage()
    user.value=''
})
container.addEventListener('click',function(e) {
    if (e.target.tagName==='LI') {
        e.target.classList.toggle('checked')
        saveToLocalStorage()
        
    } else if(e.target.tagName==="SPAN") {
        e.target.parentElement.remove()
        saveToLocalStorage()
        
    }
},false)
function saveToLocalStorage() {
    localStorage.setItem('data', container.innerHTML);
}
function showdata() {

    container.innerHTML=localStorage.getItem('data')
}
showdata()
