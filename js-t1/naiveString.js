

function substringSearch (longString, patternString)
{

    let counter = 0;
    for (let i = 0; i < longString.length; i++) // outer loop
     {
       for (let j = 0; j < patternString.length; j++) {
            if(patternString[j]!= longString[i+j])
            {
                break;
            }
            if(j===patternString.length-1)
            {
                counter++;
            }
        
       }

        
    }


    return counter;
}

console.log(substringSearch("wowomgzomg","omg"))

// long string wowomgzomg
// short string omg