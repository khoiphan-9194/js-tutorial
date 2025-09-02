

/*
Write a function called same, which accepts two arrays.
The function should return true if every value in the array
has it's corresponding value squared in the second array.
The frequency of values must be the same
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

arr1 = [1, 2, 3,1]; // 1,4,9
arr2 = [4, 1, 9,2];

function same(arr1, arr2)
{
  // we need to check if arr1 and arr2 have the same length,
  
  if (arr1.length !== arr2.length) {
    console.log("lengths are not the same");
    return false;
  }


  for (let i = 0; i < arr1.length; i++) {
    
    // let individual_Element = arr1[i] ** 2
    // arr1.splice(i, 1, individual_Element);

    // let checked_index = arr2.indexOf(arr1[i])

 


    let index = arr2.indexOf(arr1[i] ** 2)
    console.log(index)
    if (index == -1)
    {
      return false;
    }

    arr2.splice(index,1)

      
    
      


    

    
    


 
  }
  console.log(arr1)
  console.log(arr2)
  



      return true;




  // somehow we need to sqr all the arr1

  // once we sqr arr1, we need to check if the values in arr2 are the same as the values in arr1







}


function sameV2(arr1, arr2)
{
  if (arr1.length !== arr2.length) {
    console.log("lengths are not the same");
    return false;
  } // we check if 2 array have the same length
  // create 2 objects key and value pair
  let freqObject1 = {};
  let freqObject2 = {};

  // freqObject1[2] = "khoi";
  // freqObject1[3] = ["1"];
  // freqObject1["b"] = 2;
  // freqObject1[23] = 3;
  // console.log(freqObject1);
  // console.log(freqObject1["b"]);

  for (let val of arr1) {
    if (val in freqObject1)
    {
      freqObject1[val]++;
    }
    else
    {
      freqObject1[val] = 1;
    }
  }

  for (let val of arr2) {
    if (val in freqObject2)
    {
      freqObject2[val]++;
    }
    else
    {
      freqObject2[val] = 1;
    }
  }

  console.log(freqObject1);
  console.log(freqObject2);

  return true;

}
console.log(sameV2(arr1, arr2))
/*
⚡ Quick Summary
Loop	      Works on	                              Iterates over	                               Example output on [10,20,30]
for...in	  Objects, arrays	                        Keys (indexes/properties)	                      "0", "1", "2"
for...of	Iterables (arrays, strings, maps, sets)	   Values	                                           10, 20, 30
👉 Rule of thumb:

Use for...in when you care about keys/properties.

Use for...of when you care about values
*/