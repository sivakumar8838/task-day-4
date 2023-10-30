//  1 . Do the below programs in anonymous function & IIFE
//  d. Return all the prime numbers in an array

// Anonymous function

let primeNumber = function (n) {
    for (let i = 2; i < n; i++){
        if (n % i == 0)
            return false;
    }
    return n>1;
  }
  
  let A = [3,4,6,9,71,-9,-1,1,23,5];
  console.log(A.filter(primeNumber));
  
  
  
  // IIFE function
  
    let a=[3,4,6,9,71,-9,-1,1,23,5];
  
    (function(a){
      let out=[];
        for(let i=0;i<a.length;i++){
           let num=a[i];
           let ans=true;
           if(num<=1){
            ans=false;
           }
         for(let j=2;j<num;j++){
           if(num%j===0){
            ans=false
           }
         }
    
        if(ans){
          out.push(num)  
        }
        }
        console.log(out)
    })(a);
      

    //output :
     
    // [Done] exited with code=0 in 0.246 seconds

    // [Running] node "c:\siva\task\(1.d)prime number.js"
    // [ 3, 71, 23, 5 ]
    // [ 3, 71, 23, 5 ]
    
    // [Done] exited with code=0 in 0.165 seconds