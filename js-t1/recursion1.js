//
function sumrange(num)
{
    if(num===1)return 1; // base case ( stop the recursive call)
    return num+sumrange(num-1); // different input for recursive call
}

console.log(sumrange(3));

// 1.  return 3 + sumrange(2); //3 is waiting to be added to value from sumrange(2)
// 2.                2 + sumrange(1) //2 is waiting to be added to value from sumrange(1)
// 3.                          1
// once base case occured, we're backing up from step 3 to 1 like this
// now we have sumrange(1) is 1 so apply 1 to step 2
// 2+1 =3
//now we have sumrange(2) is 3, then 3+3 =6