/*
Frequency Counter / Multiple Pointers - areThereDuplicates

Implement a function called, areThereDuplicates which accepts
a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true 
*/
function areThereDuplicates(...args) {
  // args is an array of all arguments passed to the function
  // if no arguments are passed, return false
  if (args.length == 0) {
    console.log("No arguments passed");
    return false;
  }
  args.sort(); // sort the array in ascending order
  console.log("\n");

  let left = 0;
  let right = args.length-1;
  while(left<right)
  {
    
    if(args[left] === args[left+1])
    {
      return true;
    }
    else if(args[right] === args[right-1])
    {
      return true;
    }
    left++;
    right--;
    
  }
  

  return false;
}

console.log(areThereDuplicates(1, 3, 6)); // false)
console.log(areThereDuplicates(1, 2, 3, 2, 6)); // true)
console.log(areThereDuplicates("d", "a", "b", "c", "a")); // true
