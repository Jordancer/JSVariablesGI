const operator = prompt("What Kind Of Problem Is it??");

const fNum = parseFloat(prompt("Whats The 1st Number??"));
const sNum = parseFloat(prompt("Whats The Second Number??"));
var result;

if (operator == "+") {
  result = fNum + sNum;
} else if (operator == "-") {
  result = fNum - sNum;
} else if (operator == "*") {
  result = fNum * sNum;
} else {
  result = fNum / sNum;
}

alert(result);
