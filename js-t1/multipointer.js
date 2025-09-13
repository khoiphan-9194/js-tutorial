/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

    countUniqueValues([1,1,1,1,1,2]) // 2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
    countUniqueValues([]) // 0
    countUniqueValues([-2,-1,-1,0,1]) // 4

Time Complexity - O(n)

Space Complexity - O(n)
*/

function countUniqueValues(arr){
    let begin =0;
    let end = arr.length - 1;
    let newArr = [];
    while(begin <= end){
        if(arr[begin]!== arr[end]){
            if(!newArr.includes(arr[begin])){
                newArr.push(arr[begin]);
            }
    
                if(!newArr.includes(arr[end])){
                    newArr.push(arr[end]);
                }
                begin++;
                end--;
            

    
        }
        else{
            begin++;
            end--;
        }



  
        
            
    } 
    //console.log(newArr); 
    console.log(`the number of unique values in the array is: ${newArr} -- ${newArr.length} `); 
    return newArr.length;  
}
//countUniqueValues([1,2,3,4,4,4,4,7,7,12,12,13]);
//countUniqueValues([1,1,1,1,1,2]) // 2

//countUniqueValues([]) // 0
//countUniqueValues([-2,-1,-1,0,1]) // 4



function countUniqueValues2(arr){
    let left = 0;
    let right = arr.length - 1;
    let uniqueValues = new Set();
    while(left <= right){
        uniqueValues.add(arr[left]);
        uniqueValues.add(arr[right]);
        left++;
        right--;
        //console.log(uniqueValues);
      
    }
    console.log(uniqueValues);
    console.log(`the number of unique values in the array is: ${Array.from(uniqueValues).length} `);  // Return the number of unique values in the array. 
    return Array.from(uniqueValues).length;




}

//countUniqueValues2([1,2,3,4,4,4,4,7,7,12,12,13]);





function countUniqueValues3(arr) {
    if (arr.length === 0) { 
        return 0; 
    }
 
  let currentPointer = 0;
  let scoutingPointer = 1;
  while (scoutingPointer < arr.length) {
    if (arr[currentPointer] !== arr[scoutingPointer]) {
      currentPointer++;
      arr[currentPointer] = arr[scoutingPointer];
    }
    scoutingPointer++;
  }
  console.log(arr); // Return the array with unique values.
  console.log(
    `the number of unique values in the array is: ${currentPointer + 1} `
  ); // Return the number of unique values in the array.

  return currentPointer + 1;
}

// countUniqueValues3([1,1,1,2,3,3,4,4,5,6]);
// countUniqueValues3([1,2,3,4,4,4,4,7,7,12,12,13]);
console.log(countUniqueValues3([]));



// This function finds two numbers in an array that add up to zero.
// The array can contain both positive and negative numbers.
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

//console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]))