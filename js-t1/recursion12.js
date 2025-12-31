/*
nestedEvenSum
Write a recursive function called nestedEvenSum. 
Return the sum of all even numbers in an object which may contain nested objects.
JavaScript
*/
function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  let evenSum = 0;
  if (obj === null) {
    return 0;
  }
  for (const key in obj) {
    // console.log(key,obj[key])
    if (
      typeof obj[key] === "number" &&
      !Number.isNaN(obj[key]) &&
      obj[key] % 2 === 0
    ) {
      evenSum = evenSum + obj[key];
    }
    if (typeof obj[key] === "object" && obj[key] != null) {
      evenSum = evenSum + nestedEvenSum(obj[key]);
    }
  }
  return evenSum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};
console.log(nestedEvenSum(obj1));
nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
