/*
capitalizeWords

Write a recursive function called capitalizeWords. 
Given an array of words,
return a new array containing each word capitalized.
*/

function capitalizeWords (words) {
  // add whatever parameters you deem necessary - good luck!
  let capitalizedWordsArr =[];
  if(words.length == 0)
  {
    return [];
  }
  capitalizedWordsArr.push(words[0].toUpperCase())

  //let capitalized = words[0].toUpperCase();
  

return capitalizedWordsArr.concat(capitalizeWords(words.slice(1)))
  
}

let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(capitalizeWords(words))