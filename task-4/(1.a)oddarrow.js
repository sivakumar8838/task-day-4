//Do the beiow programs in arrow functions.
// 1. a . print odd number in an array


// Anonymous function

let findEvenNumbers = numbers => numbers.filter(number => number % 2 == 1);
let numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(findEvenNumbers(numbers));

// IIFE Function

console.log((numbers => numbers.filter(number => number % 2 == 1))([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

//output :

// [Running] node "c:\siva\task\(1.a)oddarrow.js"
// [ 1, 3, 5, 7, 9, 11 ]
// [ 1, 3, 5, 7, 9, 11 ]

// [Done] exited with code=0 in 0.284 seconds
