/*
Frequency Counter - sameFrequency

Write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:
Time: O(N)

Sample Input:

    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false



*/

function sameFrequency(num1, num2) {
  // make sure both numbers are positive integers
  if (num1 < 0 || num2 < 0) {
    console.log("Both numbers must be positive integers");
    return false;
  }
  // we need to convert the number to strings to make it easier to compare,

  let num1_str = num1.toString();
  let num2_str = num2.toString();

  // and then make sure they have the same length
  if (num1_str.length !== num2_str.length) {
    console.log("not same length");
    return false;
  }

  // then done

  // create an object for first string
  let freObject = {};
  // construct the frequency object for the first string
  for (let char of num1_str) {
    if (char in freObject) {
      freObject[char]++;
    } else {
      freObject[char] = 1;
    }
  }

  console.log(freObject);
  console.log(num2_str);

  for (let char2 of num2_str) {
    if (freObject[char2]) {
      // in freObject, if the value from freObject found, decrement the value in freObject

      freObject[char2]--;
    } else {
      // if the value from freObject not found, return false
      // once the value in freObject is zero, it means all values in freObject are zero, so the frequency is the same
      console.log("not same frequency");
      return false;
    }
  }

  return true;
}

// console.log(sameFrequency(1822, 2281)); // true

