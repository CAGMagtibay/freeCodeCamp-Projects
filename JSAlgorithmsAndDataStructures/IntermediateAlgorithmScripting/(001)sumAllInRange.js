// This function takes an array of two values as input.
// It returns the sum of every number between the two values, inclusively.
function sumAll(arr) {
  let sum = 0;
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  
  return sum;
}

sumAll([10, 5]);
// This input should return 45.
