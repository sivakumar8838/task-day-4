//Do the beiow programs in arrow functions.
// 4. d. Return all the prime numbers in an array


let primeNumber = (n) => {
    for (let i = 2, prime = Math.sqrt(n); i <= prime; i++)
        if (n % i == 0)
            return false;
    return n > 1;
}

let A = [3,4,6,9,71,-9,-1,1,23,5];
console.log(A.filter(primeNumber));

//output :

// [Running] node "c:\siva\task\Arrow function\prime numbers.js"
// [ 3, 71, 23, 5 ]

// [Done] exited with code=0 in 0.231 seconds