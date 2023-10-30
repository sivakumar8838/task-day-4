// 1. Do the beiow programs in arrow functions.
// e. Return all the palindromes in an array


// Anonymous function

let array1 = ['12321', 'siva', '1234', 'mom'];

let findPalindromes = function(arr) {
    return arr.filter(word => word === word.split('').reverse().join(''));
}

console.log(findPalindromes(array1));


 // IIFE function

let array = ['12321', 'siva', '1234', 'mom'];

(function(arr) {
    let palindromes = arr.filter(word => word === word.split('').reverse().join(''));
    console.log(palindromes);
})(array);


//output :

// [Running] node "c:\siva\task\(1.e)palindrome.js"
// [ '12321', 'mom' ]
// [ '12321', 'mom' ]

// [Done] exited with code=0 in 0.159 seconds