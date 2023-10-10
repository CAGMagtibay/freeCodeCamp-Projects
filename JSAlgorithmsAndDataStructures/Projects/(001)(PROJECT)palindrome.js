// This function checks whether a given string is a palindrome and returns true or false
function palindrome(str) {
  // remove all non-alphanumeric characters and turn to lowercase
  let nonAlphaNumRegex = /[\W_]/g;
  let strippedStr = str.replace(nonAlphaNumRegex, "").toLowerCase();
  //console.log(strippedStr);

  // get reverse string
  let reverseStr = strippedStr.split('').reverse().join('');
  //console.log(reverseStr);

  // compare strings
  if (strippedStr === reverseStr) {
    return true;
  }

  return false;
}

// This input should return true
palindrome("eye");
// This input should return false
palindrome("five|\_/|four")
