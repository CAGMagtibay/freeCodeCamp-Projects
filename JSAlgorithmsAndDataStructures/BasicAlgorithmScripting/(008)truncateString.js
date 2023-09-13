// This function takes in a string and a number. 
//If the string is longer than the maximum string length (number), it truncates the string and returns it.
function truncateString(str, num) {
  let truncatedStr = str.slice(0, num);
  
  if (str.length > num) {
    return truncatedStr + "...";
  }

  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
// This input should return "A-tisket..."
