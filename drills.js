//Redo the "max and min (without sort or Math.max/min)" drill 
//but this time use a while loop instead of a for loop
'use strict';

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
  let i = 0;
  //while
  while (i < numbers.length) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
    i++;
  }

  return smallest;
}

console.log(max([3, 10, 27, 2]));
console.log(min([3, 10, 27, 2]));