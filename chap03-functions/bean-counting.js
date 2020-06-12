function countChar(string, char) {
  let count = 0;

  for (letter of string) {
    if (letter === char) count++;
  }

  return count;
}

function countBs(string) {
  return countChar(string, 'B');
}


console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
console.log(countChar('BaseBall BatsBB', 's'));