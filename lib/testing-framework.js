(function(exports){

  var result;
  var message;


  function isEqualTo(test_description, input, expected_result){
    result = input == expected_result ? true : false;
    message = result === true ? `${test_description} passes` : `${test_description} fails: Expected ${input} to be equal to ${expected_result}`
    console.log(message)
  };

  function toBe(test_description, expression){
    result = expression === true
    message = result === true ? `${expression} is true` : `Fail: Expected ${expression} to be equal to true`
    console.log(message)
  };

  function toBeEmpty(test_description, array){
    result = array.length === 0
    message = result === true ? `${test_description} passes` :  `${test_description} fails: ${array} is not empty`
  }

  exports.isEqualTo = isEqualTo;
  exports.toBe = toBe;
})(this);

