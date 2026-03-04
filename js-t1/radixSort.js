

// function getDigit(num,place)
// {
//     return Math.floor(Math.abs(num)/Math.pow(10,place))%10
    
// }

// function digitCountString(num)
// {
//     if(num===0)
//     {
//         return 1;
//     }
//     let numToString = num.toString()

//     return numToString.length;
// }


function getDigit(num,place)
{
    return Math.floor(Math.abs(num)/Math.pow(10,place))%10
    
}

function digitCount(num)
{
    if(num==0)
    {
        return 1;
    }
    return Math.floor(Math.abs(Math.log10(num))+1)
}


// mostDigits(nums) given an array of numbers, then returns the number of digits
// in the largest numbers in the list.
// mostDigits([1234,56,7]) return 4
// mostDigits([12,56,43]) return 2
function mostDigits(numsArr)
{
    let maxDigit = 0;
    for (let i = 0; i < numsArr.length; i++) {
        
        if(digitCount(numsArr[i])>maxDigit)
        {
            maxDigit = digitCount(numsArr[i])
        }
        
    }
    return maxDigit;
}
//console.log(getDigit(231,1)) //3
//console.log(getDigit(2315,0)) //5
//console.log(digitCount(33)) //2, just use this in digtCount only
//console.log(mostDigits([14,56,2000])) //4
function radixSort(numsArray)

{
    let numOfTime = mostDigits(numsArray)
    //console.log(numOfTime)
    
    for (let i = 0; i < numOfTime; i++) {
        
        let buckets = Array.from({ length: 10 }, () => []);
      
       
        for (let j = 0; j < numsArray.length; j++) {
            let digit = getDigit(numsArray[j],i) //(20,0)
            buckets[digit].push(numsArray[j])
        
        }
        numsArray = [].concat(...buckets);
        
    }
    return numsArray;
}
//console.log(getDigit(231,1)) //3
console.log(radixSort([20,12,333,1,8,3,999]))
console.log(radixSort(["c","a","h","b"]))
/*
i=0
0       1       2       3       4       5       6       7       8       9
20      1       12     333                                      8       999
                        3
 [20,1,12,333,3,8,999] 
 i=1  
 0       1       2       3       4       5       6       7       8       9    
 1       12      20     333                                             999
 3
 8

 [1,3,8,12,20,333,999]
 i=2
 0       1       2       3       4       5       6       7       8       9 
 1                      333                                             999
 2
 8
 12
 20
[1,3,8,12,20,333,999]
*/