// This function takes in two words in an array.
// It tests the first word to see if all letters in the second word are present in the first word
function mutation(arr) {
  let word1 = arr[0].toLowerCase();
  let word2 = arr[1].toLowerCase();

  for (let i = 0; i < word2.length; i++) {
    if (word1.indexOf(word2[i]) < 0) {
      return false;
    }
  }
  
  return true;
}

mutation(["hello", "hey"]);
// This input should return false
