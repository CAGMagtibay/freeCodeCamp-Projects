// This function looks through a given array and returns the first element in it that passes a truth test.
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i]
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
// This input should return 8.
