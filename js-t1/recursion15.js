/*
Write a function called collectStrings which accepts an object 
and returns an array of all the values in the object 
that have a typeof string
*/

function collectStrings(obj)

{
  let stringArray =[];

  for (const key in obj) {
    let keyValue = obj[key]
    if(typeof keyValue === "string")
    {
      stringArray.push(keyValue);
    }
    else if ( typeof keyValue === "object" && keyValue != null)
    {
      let subResult = collectStrings(keyValue);
      stringArray.push(...subResult);
    }

  }

  

 
  return stringArray;
}


const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])



/*
  // ✅ BASE CASE
  if (typeof obj === "number") {
    return obj.toString();
  }

  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

*/
