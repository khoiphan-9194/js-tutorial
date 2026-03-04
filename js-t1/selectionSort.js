
//pseudocode
/*
-store the first element as the smallest value you have seen so far,
-compare this item to the next item in the array until you find a smaller value,
-if a smaller number is found, set that smaller number to be the new mininum and
continue until the end of the array,
-if the minimum is not the value (index) you initially began with, then swap the 2 values
-repeat this with the next element until the array is sorted
*/


function selectionSort(array,comparator)
{ // 5 , 4 , 3 , 1 , 2

    if (typeof comparator !== 'function') {
        comparator = function(a, b) {
          return a - b;
        };
      }
    
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        
        for ( let j = i+1; j < array.length;j++)
        {
         //   console.log( " min " + array[minIndex] + " " + array[j])
         console.log(i+" "+j)
            // if(array[minIndex] > array[j])
            if (comparator(array[minIndex], array[j]) > 0) // provide more flexibilities when dealing with object
            {
               
                minIndex = j
               
            }
        }
       if(i!==minIndex)
       {
        swap(array,i,minIndex);
        
       }
    }


    return array
}

function swap(array, indexLeft, indexRight)
{
    let temp = array[indexLeft];
    array[indexLeft] = array[indexRight];
    array[indexRight] = temp;
}
// let arr = [34,22,10,19,17]
// console.log(selectionSort(arr))



var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
console.log(selectionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 

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
   
  console.log(selectionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order