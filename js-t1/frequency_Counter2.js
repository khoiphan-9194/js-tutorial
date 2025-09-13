/*
Frequency Counter - constructNote

Write a function called constructNote, which accepts two strings, a message and some letters. 
The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)

Examples:

    constructNote('aa', 'abc') // false
    constructNote('abc', 'dcba') // true
    constructNote('aabbcc', 'bcabcaddff') // true

*/

function constructNote(message, letters) {
  // handle large cases
  // if letters is empty, return false
  if (letters.length === 0) return false;

  // if message is longer than letters, return false
  if (message.length > letters.length) return false;

  // if message is empty, return true
  if (message.length === 0) return true;

  // we need to create 2 objects, one for the message and one for the letters
  const messageObject = {};
  const lettersObject = {};
  for (let char of message) {
    char = char.toLowerCase(); // convert to lowercase to make the comparison case-insensitive
    if (char in messageObject) {
      messageObject[char]++;
    } else {
      messageObject[char] = 1;
    }
  }
  for (let char of letters) {
    char = char.toLowerCase(); // convert to lowercase to make the comparison case-insensitive
    if (char in lettersObject) {
      lettersObject[char]++;
    } else {
      lettersObject[char] = 1;
    }
  }

  console.log(lettersObject);
  console.log(messageObject);
  for (let char in messageObject) {
    if (char in lettersObject && lettersObject[char] >= messageObject[char]) {
      return true;
    }
  }
  return false;
}

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
