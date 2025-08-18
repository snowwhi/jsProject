
//step 1 grab
let box = document.querySelectorAll('.box')
// develop attribute
function random(){
let r=Math.floor(Math.random()*256)
let g=Math.floor(Math.random()*256)
let b=Math.floor(Math.random()*256)
return`rgb(${r},${g},${b})`
        
        }
        console.log(random());
        
        //main logic
box.forEach((e)=>{
    e.style.backgroundColor = random()
    e.style.color = random();
})
    
        
        
