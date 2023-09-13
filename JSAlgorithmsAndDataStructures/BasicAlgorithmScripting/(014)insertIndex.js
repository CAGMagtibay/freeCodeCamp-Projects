// This function takes in an array and a number value.
// It returns the lowest index at which the value can be inserted into the array once it has been sorted numerically.
function getIndexToIns(arr, num) {
  let sortedArr = arr.sort(function(a, b){return a - b});
  //console.log(sortedArr);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] >= num) {
      sortedArr.splice(i, 0, num);
      //console.log(sortedArr);
      return i;
    }
  }

  return sortedArr.length;
}

getIndexToIns([5, 3, 20, 3], 5);
// This input should return 2
