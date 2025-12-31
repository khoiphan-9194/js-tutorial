/*
flatten

Write a recursive function called 
flatten which accepts an array of arrays 
and returns a new array with all values flattened.
*/
function flatten(parentArr){

  let arrResult = [];
 // console.log(Array.isArray(parrentArr[3]))
 parentArr.forEach((element, index) => {
  if (Array.isArray(element)) {
  //  console.log(index);
    arrResult = arrResult.concat(flatten(element))
  
  } else {
    arrResult.push(element)
  }
});

  //console.log(arrResult)
  return arrResult;
}

console.log(flatten([1, 2, [5,[2,3], 8, 3], [4, 5] ]))
 //flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]