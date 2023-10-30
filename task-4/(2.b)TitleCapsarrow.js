//Do the beiow programs in arrow functions.
// 2. b .Convert all the strings to title caps in a array


let array = ['i', 'am', 'siva'];
let titlecaps = array.map(title => title.charAt(0).toUpperCase() + title.slice(1));
console.log(titlecaps);


//output :

// [Running] node "c:\siva\task\Arrow function\TitleCapsarrow.js"
// [ 'I', 'Am', 'Siva' ]

// [Done] exited with code=0 in 0.182 seconds