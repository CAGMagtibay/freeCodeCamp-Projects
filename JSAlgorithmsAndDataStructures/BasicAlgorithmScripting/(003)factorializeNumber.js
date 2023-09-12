// This function returns the factorial of an input integer.
function factorialize(num) {
  let factNum = 1;

  for (let i = 1; i <= num; i++) {
    factNum *= i;
  }

  return factNum;
}

factorialize(5);
