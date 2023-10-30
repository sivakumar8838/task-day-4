//   1 . Do the below programs in anonymous function & IIFE
//    f . Return median of two sorted arrays of the same size.


// anonymous function

let median = function(a, b) {
    let merged = a.concat(b).sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);

    return merged.length % 2 !== 0 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2;
}

let array1 = [2, 3, 4, 57];
let array2 = [7, 8, 66, 1];


//  IIFE Function

let array3 = [1, 2, 37, 4, 5];
let array4 = [36, 7, 80];

(function(a, b) {
    let merged = a.concat(b).sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);

    console.log(merged.length % 2 !== 0 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2);
})(array3, array4);


//output : 

// [Done] exited with code=0 in 0.159 seconds

// [Running] node "c:\siva\task\(1.f)median.js"
// 6

// [Done] exited with code=0 in 0.229 seconds
