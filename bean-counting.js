function countChar(string, char) {
  let count = 0;

  for (letter of string) {
    if (letter === char) count++;
  }

  return count;
}

console.log(countChar('BaseBall BatsBB', 's'));
console.log(countChar("BBC", 'B'));
console.log(countChar("kakkerlak", "k"));