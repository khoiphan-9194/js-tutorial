/*
Anagrams
given two strings, write a function to determine if they are anagrams. 
An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

Example:
isAnagram('listen', 'silent') => true
isAnagram('hello', 'world') => false
isAnagram('aaz', 'zza') =>  false
isAnagram('apple', 'leppa') => true
isAnagram('aba', 'abbza' => false
*/

function isAnagram(str1,str2)
{
  // we need to check if both strings have the same length
 // if they don't, we can immediately return false
 if(str1.length!== str2.length)
 {
  console.log("lengths are not the same");
  return false;
 }

 // next, we create an object to store the frequency of each character in the first string
 // and another object to store the frequency of each character in the second string

 // then we compare the two objects. If they are equal, then the strings are anagrams

 const freqObject1 = {};
 const freqObject2 = {};

 for(let arrElement of str1){
   if(arrElement in freqObject1){
    freqObject1[arrElement]++;
  } else {
    freqObject1[arrElement] = 1;
  }
 }

 for(let arrElement of str2){
  if(arrElement in freqObject2){
   freqObject2[arrElement]++;
 } else {
   freqObject2[arrElement] = 1;
 }
}
 console.log(freqObject1);
 console.log(freqObject2);
const isValid = (Object.entries(freqObject1).sort().join(',') === Object.entries(freqObject2).sort().join(','));

return isValid;
  
}

console.log(isAnagram('listen', 'silent')) // true
console.log(isAnagram('hello', 'world')) // false
console.log(isAnagram('aaz', 'zza')) // false
console.log(isAnagram('apple', 'leppa')) // true