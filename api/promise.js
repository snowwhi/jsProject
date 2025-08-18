const promise1=new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('hi there')
        resolve()
    }, 1000);
});
promise1.then(function() {
    console.log('hi there 2');
    
})
// without varaiable
new Promise((resolve, reject) => {
     setTimeout(() => {
        console.log('two')
        resolve([1,2,3,4,4])
    }, 1000);
}).then((result) => {
    console.log(result )
})
// concept of chaining and reject as well as finally
new Promise((resolve, reject) => {
    setTimeout(() => {
    let error=false
    if(!error){
            console.log('something@@@@@@@@@@@@@@@@@@@@@');
            resolve([1,2,3,45,5])
        }else{
            reject('something went wrong')
        }
    }, 1000);
        
})
.then(function (result) {
    console.log(result);
    return result[1]
}).then(function (index) {
    console.log(index);
    
})
.catch(function (reject) {
    console.log(reject);
})
.finally(function () {
    console.log("jo hona tha ho giya bhai");
    
})
fetch('https://api.github.com/users/snowwhi')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))