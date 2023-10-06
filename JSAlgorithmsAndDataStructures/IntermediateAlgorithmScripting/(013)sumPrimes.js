// This function takes a number as input and returns the sum of all prime numbers that are less than or equal to the given number
function sumPrimes(num) {
  let sum = 0;
  let currentPrime = 1;
  
  // check if number is prime
  function isPrime(num) {
    for (let i = 2; i <= num - 1; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }

  for (let j = 2; j <= num; j++) {
    if (isPrime(j)) {
      sum += j;
    }
  }

  return sum;
}

// This input should return 17
sumPrimes(10);
