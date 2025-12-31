/*
reverse

Write a recursive function called reverse 
which accepts a string and returns a new string in reverse.
*/
function reverse(wordStr){
  // add whatever parameters you deem necessary - good luck!
 if(wordStr.length<=1)
 {
  return wordStr;
 }
 let lastChar = wordStr[wordStr.length-1];


 // 2. Take the substring without the last character.

 let nextChar = wordStr.slice(0, wordStr.length - 1);
 

 
  return lastChar.concat(reverse(nextChar))
}

console.log(reverse('awesome'))

 reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'