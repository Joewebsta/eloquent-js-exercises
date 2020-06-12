function reverseArray(array) {
  let reversedArray = [];
  for (val of array) {
    reversedArray.unshift(val);
  }
 
  return reversedArray;
}

let arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(arrayValue) {
  for (let i = 0; i < Math.floor(arrayValue.length / 2); i++) {
    let oppositeNum = arrayValue[i];
    arrayValue[i] = arrayValue.length - i;
    arrayValue[arrayValue.length - 1 - i] = oppositeNum;
  }
}
console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));


reverseArrayInPlace(arrayValue);
console.log(arrayValue);