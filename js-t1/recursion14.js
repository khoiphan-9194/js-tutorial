/*
stringifyNumbers

Write a function called stringifyNumbers which takes in an object 
and finds all of the values which are numbers and converts them to strings. 
Recursion would be a great way to solve this!

The exercise intends for you to create a new object with the numbers converted to strings, 
and not modify the original. Keep the original object unchanged.
*/

function stringifyNumbers(obj) {

  // ✅ BASE CASE
  if (typeof obj === "number") {
    return obj.toString();
  }

  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let newObject = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    let keyValue = obj[key];

    if (typeof keyValue === "number" && !Number.isNaN(keyValue)) {
      newObject[key] = keyValue.toString();
    }
    else if (Array.isArray(keyValue)) {
      newObject[key] = keyValue.map(stringifyNumbers);
    }
    else if (typeof keyValue === "object" && keyValue != null) {
      newObject[key] = stringifyNumbers(keyValue);
    }
    else {
      newObject[key] = keyValue;
    }
  }

  return newObject;
}




let obj = {
    num: 1,
    str: "khoi",
    arr: [4,3,2],
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj))

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/




/*

const ori = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}
const copy = {...ori}

copy.num = 5;
copy.data.val= 10;
copy.data.info.random=15;
console.log(ori)
*/