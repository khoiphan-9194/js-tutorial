/*
pseudocode:

create a loop start with index = 1
- start by picking the second element in the array,
- now compare the second element with the one before it and swap it necessary 
- continue to the next element and if it is in the incorrect order, iterate thru 
the sorted portion(i.e the left side) to place the element in the correct place
- repeat until the array is sorted

*/

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentElement = arr[i];
      let j = i - 1;
  
      while (j >= 0 && currentElement < arr[j]) {
        arr[j + 1] = arr[j]; // shift right
        j--;
      }
  
      arr[j + 1] = currentElement; // insert once
    }
  
    return arr;
  }

  function insertionSortV2(arr) {
  // Start from the second element because the first element
  // by itself is already considered "sorted"
  for (let i = 1; i < arr.length; i++) {

    // Save the current element that we want to insert
    let currentElement = arr[i];

    // Start comparing with the element just to the left
    let j;

    // Move left while elements are greater than currentElement
    for (j = i - 1; j >= 0; j--) {

      // If the left element is bigger, shift it to the right
      if (arr[j] > currentElement) {
        arr[j + 1] = arr[j]; // shift right
      } else {
        // Stop when we find the correct position
        break;
      }
    }

    // Insert currentElement into its correct position
    // j is now one index to the left of where currentElement belongs
    arr[j + 1] = currentElement;
  }

  // Return the sorted array
  return arr;
}


let array = [1,3,2,0]
let array2 = [5,3,1,0]
console.log(insertionSortV2(array));
console.log(insertionSort(array2));