//Do the beiow programs in arrow functions.
// 2. e. Return all the palindromes in an array


let palindromes = arr => arr.filter(word => word === word.split('').reverse().join(''));

let a = ['12321', 'siva', '1234', 'mom'];
let x = palindromes(a);
console.log(x);


//output :

// [Running] node "c:\siva\task\Arrow function\Palindromes.js"
// [ '12321', 'mom' ]

// [Done] exited with code=0 in 0.191 seconds