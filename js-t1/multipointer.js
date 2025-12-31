/*
Frequency Counter / Multiple Pointer - findPair

Given an unsorted array and a number n, 
find if there exists a pair of elements in the array whose difference is n. 
This function should return true if the pair exists or false if it does not.

      console.log(findPair([6,1,4,10,2,4], 2)) // true
      console.log(findPair([8,6,2,4,1,0,2,5,13],1)) // true
      console.log(findPair([4,-2,3,10],-6)) // true
      console.log(findPair([6,1,4,10,2,4], 22)) // false
      console.log(findPair([], 0)) // false
      console.log(findPair([5,5], 0)) // true
      console.log(findPair([-4,4], -8)) // true
      console.log(findPair([-4,4], 8)) // true
      console.log(findPair([1,3,4,6],-2)) // true
      console.log(findPair([0,1,3,4,6],-2)) // true
      console.log(findPair([1,2,3], 0)) // false

Part 1 - solve this with the following requirements:

Time Complexity Requirement - O(n))

Space Complexity Requirement - O(n))

Part 2 - solve this with the following requirements:

Time Complexity Requirement - O(n log n))

Space Complexity Requirement - O(1))
*/
function findPair(arr, targetedDifference) {
  // make sure the array not empty
  if (arr.length === 0) {
    console.log("invalid array");
    return false;
  }

  // we need to create 2 pointers to check the pair
  let left = 0;
  let right = 1;

  let abs_targetedDifference = Math.abs(targetedDifference);

  console.log(abs_targetedDifference);
  // sort the array first
  arr.sort((a, b) => a - b);

  while (right < arr.length) {
    if (left !== right) {
      let diff = Math.abs(arr[right] - arr[left]);
      if (diff === abs_targetedDifference) {
        return true;
      } else if (diff < abs_targetedDifference) right++;
      else left++;
    } else right++;
  }

  return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true
console.log(findPair([1, 2, 3], 0)); // false
