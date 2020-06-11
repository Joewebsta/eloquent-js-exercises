let output = '';
let pound = false;
let size = 8;

for (i = 1; i <= (size ** 2); i++) {

  if (pound) {
    output += '#';
    pound = !pound;
  } else {
    output += ' ';
    pound = !pound;
  }

  if (i % size === 0) {
    output += '\n';
    pound = !pound;
  }
}

console.log(output);