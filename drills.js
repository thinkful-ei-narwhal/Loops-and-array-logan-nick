let numArray = [14, 19, 33, 55];

function average(numbers) {
  let total = 0;
  numbers.forEach(x => (total += x));
  return total / numbers.length;
}

console.log(average(numArray));

("use strict");

function max(numbers) {
  if (numbers.length < 1) {
    return null;
  }

  let largest = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
    i++;
  }

  return largest;
}

function min(numbers) {
  if (numbers.length < 1) {
    return null;
  }

  let smallest = numbers[0];
  let i = 0; //while while (i < numbers.length) { if (numbers[i] < smallest) { smallest = numbers[i]; } i++; }

  return smallest;
}

console.log(max([3, 10, 27, 2]));
console.log(min([3, 10, 27, 2]));

("use strict");

//
let numArray = [14, 19, 33, 55];
function average(numbers) {
  //add all numbers and divide by array length.
  let total = 0;
  numbers.forEach(x => (total += x));
  return total / numbers.length;
}

console.log(average(numArray));

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log("SUCCESS: `" + fn.name + "` works on `[" + input + "]`");
    return true;
  } else {
    console.log(
      "FAILURE: `" +
        fn.name +
        "([" +
        input +
        "])` should be " +
        expected +
        " but was " +
        fn(input)
    );
    return false;
  }
}

(function runTests() {
  const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const correctAns1 = 5.5;
  const numList2 = [0, -1, 1];
  const correctAns2 = 0;

  const testResults = [
    testFunctionWorks(average, numList1, correctAns1),
    testFunctionWorks(average, numList2, correctAns2)
  ];
  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + " out of " + testResults.length + " tests passing.");
})();
