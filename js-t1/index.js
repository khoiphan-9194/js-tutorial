/*
Write a function called same, which accepts two arrays.
The function should return true if every value in the array
has it's corresponding value squared in the second array.
The frequency of values must be the same
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

arr1 = [1, 2, 3, 4, 2]; // 1,4,9
arr2 = [4, 1, 9, 16, 4];

function same(arr1, arr2) {
  // we need to check if arr1 and arr2 have the same length,

  if (arr1.length !== arr2.length) {
    console.log("lengths are not the same");
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // let individual_Element = arr1[i] ** 2
    // arr1.splice(i, 1, individual_Element);

    // let checked_index = arr2.indexOf(arr1[i])

    let index = arr2.indexOf(arr1[i] ** 2);
    console.log(index);
    if (index == -1) {
      return false;
    }

    arr2.splice(index, 1);
  }
  console.log(arr1);
  console.log(arr2);

  return true;

  // somehow we need to sqr all the arr1

  // once we sqr arr1, we need to check if the values in arr2 are the same as the values in arr1
}

function sameV2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("lengths are not the same");
    return false;
  } // we check if 2 array have the same length
  // create 2 objects key and value pair
  let freqObject1 = {};
  let freqObject2 = {};
  // we need to construct freObject1 and freqObject2
  // which adds the value of the array as key and the frequency of the value as value
  for (let val of arr1) {
    if (val in freqObject1) {
      // check if the value is already in the object as key

      freqObject1[val] = freqObject1[val] + 1; // if it is, we increment the value by 1
    } else {
      freqObject1[val] = 1;
    }
  }

  // we do the same thing for arr2
  for (let val of arr2) {
    if (val in freqObject2) {
      freqObject2[val]++;
    } else {
      freqObject2[val] = 1;
    }
  }

  // once we done we need to loop the entire object freObject1
  for (let key in freqObject1) {
    console.log(key, key ** 2);
    // we check if the squared key in freObject1 has a corresponding key in freqObject2
    if (!(key ** 2) in freqObject2) {
      return false;
    }
    // we check if the frequency of the squared key in freqObject2 is the same as 
    //the frequency of the key in freqObject1
    if (freqObject2[key ** 2] !== freqObject1[key]) {
      return false;
    }
  }

  console.log(freqObject1);
  console.log(freqObject2);

  const a = [1, 2, 3, 4, 2];

  
 

  return true;
}
console.log(sameV2(arr1, arr2));
/*
⚡ Quick Summary
Loop	      Works on	                              Iterates over	                               Example output on [10,20,30]
for...in	  Objects, arrays	                        Keys (indexes/properties)	                      "0", "1", "2"
for...of	Iterables (arrays, strings, maps, sets)	   Values	                                           10, 20, 30
👉 Rule of thumb:

Use for...in when you care about keys/properties.

Use for...of when you care about values
*/
