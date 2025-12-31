
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
    return arr
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