/*
someRecursive

Write a recursive function called 
someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns 
true when passed to the callback. Otherwise it returns false.
*/

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = (value) => {
  return value % 2 !== 0 ? true : false;
};

function someRecursive(arrNum, isOdd) {
  // add whatever parameters you deem necessary - good luck!

  if (arrNum.length == 0) {
    return false;
  }

  if (isOdd(arrNum[0])) {
    return true;
  }

  return someRecursive(arrNum.slice(1), isOdd);
}

console.log(someRecursive([1, 2, 3, 4], isOdd));

console.log(someRecursive([2, 4, 6, 8], isOdd));
