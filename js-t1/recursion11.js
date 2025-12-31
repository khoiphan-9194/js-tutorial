/*
capitalizeFirst

Write a recursive function called capitalizeFirst. 
Given an array of strings, 
capitalize the first letter of each string in the array.
*/

function capitalizeFirst (arrString) {
  // add whatever parameters you deem necessary - good luck!
  let resultString = [];
    if(arrString.length == 0)
    {
      return [];
    }
 // console.log(arrString[0].charAt(0).toUpperCase()+arrString[0].slice(1));
 let word = arrString[0];
 let capitalized = word[0].toUpperCase() + word.slice(1);
 //console.log(capitalized)
 resultString.push(capitalized)
    return resultString.concat(capitalizeFirst(arrString.slice(1)))
}
//capitalizeFirst(['car','taco','banana'])

console.log( capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
