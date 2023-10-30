// Anonymous function
// 1. b. Convert all the strings to title caps in a array

let capitalize = (arr) => {
    arr.forEach((item, index) => {
        arr[index] = item.charAt(0).toUpperCase() + item.slice(1);
    });
    console.log(arr);
}
let array = ['i', 'am', 'siva'];
capitalize(array);

// IIFE Function
let a = ['i', 'am', 'siva'];
((arr) => {
    arr.forEach((item, index) => {
        arr[index] = item.charAt(0).toUpperCase() + item.slice(1);
    });
    console.log(arr);
})(a);

//output :

// [Running] node "c:\siva\task\(1.b)Titlecaps.js"
// [ 'I', 'Am', 'Siva' ]
// [ 'I', 'Am', 'Siva' ]

// [Done] exited with code=0 in 0.211 seconds