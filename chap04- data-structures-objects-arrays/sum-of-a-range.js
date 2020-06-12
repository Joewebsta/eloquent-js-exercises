function range(start, end, step = 1) {
  let range = [];

  if ( step < 0){
    for (let i = start; i >= end; i += step) {
      range.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
  }
  return range;
}

function sum(numbers) {
  let count = 0;

  for (number of numbers) {
    count += number;
  }

  return count;
}

console.log(range(1, 10, 2));
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
console.log(sum(range(1, 100, 5)));