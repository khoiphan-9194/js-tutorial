/*
Frequency Counter - findAllDuplicates

Given an array of positive integers, some elements appear twice and others appear once.
 Find all the elements that appear twice in this array. 
 Note that you can return the elements in any order.

    findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
    findAllDuplicates([4, 3, 2, 1, 0]) // []
    findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
*/

function findAllDuplicates(integersArray) {
  if (integersArray.length == 0) {
    return;
  }
  let duplicateArr = [];

  let objectCounter = {};

  for (const elements of integersArray) {
    if (elements in objectCounter) {
      objectCounter[elements]++;
    } else {
      objectCounter[elements] = 1;
    }
  }

  // console.log(objectCounter)
  for (const key in objectCounter) {
    if (objectCounter[key] === 2) {
        duplicateArr.push(Number(key)); // convert to number
    }
    }
  

  return duplicateArr;
}


console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findAllDuplicates([4, 3, 2, 1, 0]));
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));
console.log(findAllDuplicates([2,3,1,2,3]));
