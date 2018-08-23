// (function(exports){

//   var result;
//   var message;

function expect(test_description, actual) {
  function toEqual(expected_result) {
    actual === expected_result ? console.log(`${test_description} passes`) : (function() { throw new Error(`${test_description} fails, expected ${expected_result}, got ${actual}`)}());
  }

  return{
    toEqual
  }
}

//   function toBe(test_description, expression) {
//     result = expression === true;
//     message = result === true ? `${expression} is true` : `Fails: Expected ${expression} to be equal to true`;
//     console.log(message);
//   }

//   function isEmpty(test_description, array) {
//     result = array.length  === 0;
//     message = result === true ? `${test_description} passes` :  `${test_description} Fails: ${array} is not empty`;
//     console.log(message);
//   }

//   // function contains(test_description, input, array) {
//   //   result = array.indexOf(input) >= 0 ? true : false;
//   //   message = result === true ? `${test_description} passes` : `${test_description} Fails: This object is not in the array`; 
//   //   console.log(message);
//   // }

//   exports.isEqualTo = isEqualTo;
//   exports.toBe = toBe;
//   exports.isEmpty = isEmpty;
//   // exports.contains = contains;
// })(this);

