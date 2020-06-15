function arrayToList(array) {
  let list = {};

  for (let i = array.length - 1; i >= 0; i--) { 
    if (Object.keys(list).length === 0) {
      list = {value: array[i], rest: null} 
    } else {
      list = {value: array[i], rest: list}
    }
  }
  return list;
}

function listToArray(list) {
  let array = [];

  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}



// console.log(arrayToList([1,2,3]));
// console.log(arrayToList([10, 20]));
// console.log(listToArray(arrayToList([10, 20, 30])));