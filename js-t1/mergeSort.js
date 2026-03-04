//

// 
// merge will not work if arrLeft or arrRight not sorted
// for example
// work left[2,3,5] right[1,9,10]
// not work left[9,3,12] right[1,9,10]

function merge (arrLeft,arrRight,comparator)
{
      // Default comparator: numbers, ascending
      if (typeof comparator !== 'function') {
        comparator = function(a, b) {
          return a - b;
        };
      }
    

    // let create a new array that will store the sorted number
    let newArr =[]
    let i =0 // left pointer that represents arr1
    let j=0 // right pointer that represents arr2
    while(i<arrLeft.length && j< arrRight.length) // now we need to loop

    
    {
       
        if(comparator(arrLeft[i],arrRight[j])<0)
        {
            newArr.push(arrLeft[i]);
            i++
            //[2,6]
            //[4,5]
            //2<4
            // i = 0; j=0
            
        }
        else
        {
            newArr.push(arrRight[j])
            j++
        }
    }

  //  console.log(i,arrLeft.slice(i),j,(arrLeft.slice(j)))
    return newArr.concat(arrLeft.slice(i)).concat(arrRight.slice(j))
}

function mergeSort(arr,comparator)
{
    // if the array has only one element then it already sorted
    // so we just return it then.

    if(arr.length <=1)
    return arr;
    let middle = Math.floor(arr.length/2)
   // console.log(middle)
    let arrayLeft = arr.slice(0,middle)
  //  console.log(arrayLeft)
    let arrayRight = arr.slice(middle);
 //   console.log(arrayRight)

    return merge(mergeSort(arrayLeft,comparator),mergeSort(arrayRight,comparator),comparator);
}

//let array = [4,1,3,0];
//console.log(mergeSort(array));

// let arr1=[9,3,1] // will not work because it not sorted
// let arr2=[0,10,2]; // will not work because it not sorted

//let arr1=[0,1,2,3] // will work because it sorted
//let arr2=[1,9,20]; // will work because it sorted
//console.log(arr1.slice(0))
//console.log(merge(arr1,arr2));



 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
console.log(mergeSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
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
 
console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order