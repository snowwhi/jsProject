function factorial(num){
            let fat = 1;
            for(let index = 1; index <= num; index++){
            fat = fat * index;
            }
            return fat;
        }
        console.log(factorial(18))
        // approah 2 of redue
        let num=16
        function fat(num) {
           let arr= Array.from(Array(num+1).keys())    
           let c =arr.slice(1 ,).reduce((a,b)=>a*b)
return c    
        }
        console.log(fat(10));
        