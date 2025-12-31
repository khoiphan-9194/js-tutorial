// find the length of the longest subArray with the same value in each position



// longestSubArray([7,3,3,3,2,2,2,2])

// function longestSubArray(arr)
// {
//     // we check if array is not = 0
//     // we need to sort to make thing easier
//     // set up left and right
//     // we set a loop 
//     if(arr.length==0)
//     {
//         console.log("invalid array")
//         return;
//     }
//     arr.sort((a,b)=>a-b);
//     console.log(arr);
//     let left_sliding =0;
//     let righ_sliding=0;
//     let counter=1;
//     let result=1;

//     while(righ_sliding<arr.length)
//     {

//         if(arr[left_sliding]===arr[righ_sliding])
//         {
//            console.log(left_sliding,righ_sliding+" same value"+arr[left_sliding],arr[righ_sliding]);
//            counter++;
//            if(counter>result)
//            {
//                result=counter;
//            }
//            righ_sliding++;
//         }
//         else
//         {
//             console.log(left_sliding,righ_sliding+" different value"+arr[left_sliding],arr[righ_sliding]);
//             left_sliding=righ_sliding;
//             console.log(left_sliding,righ_sliding+" reset counter")
//             if(counter>result)
//             {
//                 result=counter;
//             }
//             counter=0;
//         }
       
        
//     }

//     return result;
// }

// console.log(longestSubArray([7,3,3,3,2,2,2,2])); // 4



    function longestSubArray(arr) {
        if (arr.length === 0) {
            console.log("invalid array");
            return 0;
        }
    
    
        let left_sliding = 0;
        let righ_sliding = 0;
        let counter = 0;
        let result = 0;
    
        while (righ_sliding < arr.length) {
            
            if (arr[left_sliding] === arr[righ_sliding]) {
                counter++;
                result = Math.max(result, counter);
                righ_sliding++;
            } else {
                left_sliding = righ_sliding;
                counter = 0; // <-- reset count for new value
            }
        }
    
        return result;
    }
    
    console.log(longestSubArray([7, 6,6,6,6,6,3, 3, 3, 2, 2, 2, 2])); // 4
    
