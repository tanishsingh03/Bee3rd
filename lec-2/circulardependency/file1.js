const file1 = require('./file1.js');

function sum(a, b) {
  return a + b;
}   
function subtract(a, b) {
  return a - b;
}
exports = {
  sum: sum,     
    subtract: subtract,
    file1: file1
};