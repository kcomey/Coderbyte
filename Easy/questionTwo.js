/*Using the JavaScript language, have the function FirstFactorial(num)
take the num parameter being passed and return the factorial of it
(ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will
be between 1 and 18. */

function FirstFactorial(num) {
  return num ===0 ? 1 : num * (FirstFactorial(num-1));
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());
