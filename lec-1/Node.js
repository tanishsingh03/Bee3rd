const fs = require('fs');
console.log(fs);
console.log("Hello, Node.js!");





function add(a, b) {
    return a + b;       

}
function subtract(a, b) {
    return a - b;       
}
function multiply(a, b) {
    return a * b;       
}       


fs.readFile('sample.txt', 'utf-8', (err, data) => {
   console.log("File content:", data);
    })



add(5, 3);
subtract(10, 4);    
multiply(2, 6);
console.log("exit");