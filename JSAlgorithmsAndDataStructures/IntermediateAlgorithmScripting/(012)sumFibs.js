// This function takes a positive integer as input and returns the sum of all odd Fibonacci numbers that are less than or equal to num
function sumFibs(num) {
  let num1 = 0;
  let num2 = 1;
  let sum = 0;
  
  while (num2 <= num) {
    // check if num2 is odd
    if (num2 % 2 !== 0) {
      // add to sum if odd
      sum += num2;
    }
    // continue Fibonacci sequence
    num2 += num1;
    // replace num1
    num1 = num2 - num1;
  }
  
  return sum;
}

// This input should return 5
sumFibs(4);
