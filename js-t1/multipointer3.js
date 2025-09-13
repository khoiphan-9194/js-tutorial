/*
Multiple Pointers - averagePair

Write a function called averagePair. 
Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where 
the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

    averagePair([1,2,3],2.5) // true
    averagePair([1,3,3,5,6,7,10,12,19],8) // true
    averagePair([-1,0,3,4,5,6], 4.1) // false
    averagePair([],4) // false

The classic two-pointer technique for sorted arrays starts with:

one pointer at the beginning (left = 0)

one pointer at the end (right = arr.length - 1)
*/

function averagePair(arr, targetAve) {
  // if the array is 0 or less than zero, return false,

  if (arr.length === 0) {
    console.log("Array is either empty or not sorted");
    return false;
  }

  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    let ave = (arr[leftPointer] + arr[rightPointer]) / 2;
    if (ave === targetAve) {
      return true;
    } else if (ave < targetAve) {
      leftPointer++;
    } else rightPointer--;
  }

  return false;
}

console.log(averagePair([1, 3, 4, 7, 8, 9, 13], 6)); // true
console.log(averagePair([1, 3, 4, 7, 8, 9, 13], 10)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
