/*
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow() 
 - do not worry about negative bases and exponents.
 // Recursive Version
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)
*/

// power(2,0) // 1
// power(2,1) // 2
// power(2,2) // 4
// power(2,4) // 16

function power(base,exponent){
    if(exponent<=0)
    {
        console.log("we reached 0")
        return 1;
    }
    return base * power(base,exponent-1);
}

console.log(power(2,2));