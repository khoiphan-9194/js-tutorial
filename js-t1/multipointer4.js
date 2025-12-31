/*
Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two strings and 
checks whether the characters in the first string form a subsequence of the characters 
in the second string. 
In other words, the function should check whether the characters in the first string 
appear somewhere in the second string, without their order changing.

Examples:

    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)

The classic two-pointer technique for sorted arrays starts with:

one pointer at the beginning (left = 0)

one pointer at the end (right = arr.length - 1)
*/


function isSubsequence(str1, str2) {

  // check if str1 and str2 exists
  if(str1.length ==0 || str2.length == 0)
  {
    console.log("invalid string")
    return false
  }
   let ptr_str1 =0;
   let ptr_str2 =0;
   while(ptr_str2<str2.length)
   {
    if(str1[ptr_str1]===str2[ptr_str2])
    {
      ptr_str1++;
    }
    if(ptr_str1===str1.length) return true;
    ptr_str2++;
   }

  

  

  return false;
}

console.log(isSubsequence('bsing', 'bsting')); // true
console.log(isSubsequence('abc', 'acb')); // false
