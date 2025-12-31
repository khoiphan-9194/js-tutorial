/*
isPalindrome
Write a recursive function called isPalindrome 
which returns true if the string passed to it is a palindrome 
(reads the same forward and backward). Otherwise it returns false.
*/
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(word){
  // add whatever parameters you deem necessary - good luck!
  if(word.length<=1) return true;

  
  if (word[0] !== word[word.length - 1]) return false;

  return isPalindrome(word.slice(1, -1));  
}
console.log(isPalindrome("tacocat"))
/*
✅ Idea 1: Compare first and last characters
Recursion logic:

Base case:

If the string has 0 or 1 characters, it's automatically a palindrome → return true.

Check characters:

Compare the first and last characters.

If they are not equal, return false immediately.

Recursion step:

Remove the first and last characters.

Call isPalindrome on the smaller substring.
*/