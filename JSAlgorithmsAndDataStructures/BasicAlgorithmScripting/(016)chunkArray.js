// This function takes in an array and a size number.
// The function splits the array into groups of the given size and returns a two-dimensional array
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i + size) {
    newArr.push(arr.splice(i, size));
  }

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// This input should return [["a", "b"], ["c", "d"]]
