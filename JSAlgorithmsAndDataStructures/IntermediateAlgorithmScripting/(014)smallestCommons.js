// This function takes an array of two numbers and finds the smallest common multiple that is divisible by all numbers in the range between the numbers, inclusively
function smallestCommons(arr) {
  // sort arr into upper and lower limits
  const [lower, upper] = arr.sort((a, b) => a - b);
  const numberOfDivisors = upper - lower + 1;

  // find greatest common multiple
  let gcm = 1;
  for (let i = lower; i <= upper; i++) {
    gcm *= i;
  }
  
  // iterate through multiples of upper limit
  for (let multi = upper; multi <= gcm; multi += upper) {
    // iterate through every value in range to see if multi is divisible
    let divisorCount = 0;
    
    for (let j = lower; j <= upper; j++) {
      if (multi % j === 0) {
        divisorCount += 1;
      }
    }

    if (divisorCount === numberOfDivisors) {
      return multi;
    }
  }
}

// This input should return 60
smallestCommons([1,5]);
