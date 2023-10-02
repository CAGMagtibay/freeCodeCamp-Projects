// This function takes in a sentence to be searched, a word to be replaced, and a word to replace as input.
// This function preserves the case of the first character in the original word to be replaced.
// This function replaces the word with another.
function myReplace(str, before, after) {
  // check if case of first character must be changed
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  }
  else {
    after = after[0].toLowerCase() + after.substring(1);
  }
  
  // replace before with after in str
  let newStr = str.replace(before, after);
  return newStr;
}

// This input should return "A quick brown fox leaped over the lazy dog"
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
