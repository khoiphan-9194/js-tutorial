




function pivot (arr, start=0, end = arr.length-1)
{
 let pivotValue = arr[start]; // let choose the first element in the array as a pivot
 let swapIndex =start;
 for (let i = start+1; i <= end; i++) {
    if(pivotValue>arr[i])
    {
        swapIndex++;
        [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
 }
  // when the loop ended then we move the pivot to the correct place
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

   console.log(arr)
    return swapIndex;
 
}
 let arr2 = [3,2,5,1,0]
 //console.log(pivot(arr2))
//[0,2,1,3,5]
let arr3 = [0,2,1,3,5];
console.log(pivot(arr3))

/*
pivot(arr,0,4)
pivotValue = 3
swapIndex = start =0;
end = 4
loop from index 1 until <= end


i = 1    1<=4
3>2 true
=> then swapIndex++ => 1
swap(arr[swapIndex], arr[i])
then[3,2,5,1,0]

i =2     2<=4
3>5 false, nothing happened the loop move to next element

i =3     3<=4
3>1 true
=> then swapIndex++ => 2
swap(arr[swapIndex], arr[i])
then[3,2,1,5,0]

i =4 4<=4
3>0 true
=> then swapIndex++ => 3
swap(arr[swapIndex], arr[i])
then[3,2,1,0,5]

i =5 5<=4 false, loop breaks
then
           0            3
swap(arr[start],arr[swapIndex])
[0,2,1,3,5]

return
swapIndex =3
*/

// let arr1 = [3,1,6,2,8]
//     pivot = 3, then [2,1,3,6,8]
//  let i =1;
//  3>1 true, then swapIndex = 1; then swap(arr[1],arr[swapIndex])
//  updated arr1 [3,1,6,2,8]

//  let i =2;
//  4>6 false, then nothing happened

// let i =3;
// 3> 2 true, then swapIndex = 2; then swap(arr[3],arr[swapIndex])
// updated arr1 [3,1,2,6,8]

// let i = 4;
// 3>8; false, then nothing happened

// then the loop breaks, then we place the pivot in the correct order
// swap(arr[start],arr[swapIndex]);
// updated arr1 [2,1,3,6,8]
// then return swapIndex




function quickSort(arr,left = 0, right = arr.length-1)
{
    if(left < right)
    {
     let pivotIndex = pivot(arr, left,right)
     // left
     quickSort(arr,left,pivotIndex-1)

     //eight
     quickSort(arr,pivotIndex+1,right);
        //
    }
    return arr
}
let arr1 = [3,2,5,1,0]
/*
quickSort(arr1,0,4)
0<4 true, then
pivotIndex = pivot(arr,0,4)
{
    pivot(arr,0,4)
    [3,2,5,1,0]
    [3,2,5,1,0]
    [3,2,1,5,0]
    [3,2,1,0,5]
    [0,2,1,3,5]
}
pivotIndex = 3

            left first
            quickSort(arr,0,2)
            0<2 true, then
            pivotIndex = pivot (arr,0,2)
            {
                pivot (arr,0,2)
               [0,2,1]
               [0,2,1]
               [0,2,1]
               pivotIndex =0;
               quickSort(arr,0,-1)
               0<-1 false then break

               quickSort (arr,1,2)
               1<2 true then
               pivotIndex = pivot(arr,1,2)
               {
                pivot (arr,1,2)
                [1,2]
                pivotIndex =1;
               quickSort(arr,0,-1)
               0<-1 false then break
               quickSort(arr,2,1) break

                
               }

               
                
            }
            right 
            quickSort(arr,4,4) break

            [0,1,2,3,5]



*/











//quickSort(arr1,0,4)
// 0<4, then pivotIndex = pivot(arr,0,4) 
// pivot = 2
// [ 3, 1 2,6,8] => [2,1,3,6,8]
// quickSort(arr,0,1)
                 // 0<1. then pivotIndex = pivot(arr,0,1)
                 // pivot = 1
                 // => [1,2,3,6,8]
                 // quickSort[arr,0,0] then break

// quickSort(arr,3,3) // return









console.log(quickSort(arr1))

