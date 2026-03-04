
function bub2(array)
{
    for( let i =0; i < array.length; i++)
    {
        for ( let j = array.length -1; j >= i;j--)
        {
            if(array[j] >= array[j-1]){
                swap(array,j,j-1)
            }
        }
    }
    return array
}

function bubbleSort(arr)
{
    for (let i = arr.length-1; i>0; i--)
    {
        for (let j = 0; j <= i-1;j++)
        {
            if(arr[j]> arr[j+1])
            {
                swap(arr,j,j+1)
            }
        }
    }
 // [2,1,0,3]
//  i = 3
//  3>0
//  j=0 0<=2
//  2>1
//  [1,2,0,3]
//  j=1 1<=2
//  2>0
//  [1,0,2,3]
//  j=2 2<=2
//  2>3 false
//  j=3 break

//  i=2
//  2>0
//  j=0 0<=1
//  1>0
//  [0,1,2,3]
//  j=1 1<=1
//  1>2 false
//  j=2 break

//  i=1
//  1>0
//  j=0 0<=0
//  0>1 false
//  j=1 break

//  i=0
//  0>0 break
//   then [0,1,2,3]
    
    return arr
}

function swap(array, indexLeft, indexRight)
{
    let temp = array[indexLeft];
    array[indexLeft] = array[indexRight];
    array[indexRight] = temp;
}
let arr = [5,3,4,1,2]
console.log(bubbleSort(arr))
console.log(bub2(arr))


function bubbleSortV2(arr, comparator) {
    // Default comparator: numbers, ascending
    if (typeof comparator !== 'function') {
      comparator = function(a, b) {
        return a - b;
      };
    }
  
    let noSwaps;
  
    for (let i = arr.length; i > 0; i--) {
      noSwaps = true;
  
      for (let j = 0; j < i - 1; j++) {
        // If comparator returns a positive number → swap
        if (comparator(arr[j], arr[j + 1]) > 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          noSwaps = false;
        }
      }
  
      // Optimization: stop if already sorted
      if (noSwaps) break;
    }
  
    return arr;
  }

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}



 
console.log(bubbleSortV2(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
var moarKittyData = [{
    name: "LilBub",
    age: 7
  }, {
    name: "Garfield",
    age: 40
  }, {
    name: "Heathcliff",
    age: 45
  }, {
    name: "Blue",
    age: 1
  }, {
    name: "Grumpy",
    age: 6
  }];
   
  function oldestToYoungest(a, b) {
    return b.age - a.age;
  }
   
  console.log(bubbleSortV2(moarKittyData, oldestToYoungest)); // sorted by age in descending order