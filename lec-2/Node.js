function sum (a, b) {
  return a + b;
}   
function subtract (a, b) {
  return a - b;
}
module.exports = {
  sum: sum,
  subtract: subtract
};

module.exports.sum = sum;   
module.exports.subtract = subtract;
// ES6 module system ----- export default sum;

// ES6 module system ----- export { sum, subtract };

//common js module system ----- require();
///