// This function takes a string as an input and checks if it looks like a valid US phone number.
function telephoneCheck(str) {
  /* valid formats:
    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555
  */
  // create regex for formatting
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  // test str against regex
  if (regex.test(str)) {
    return true;
  }
  return false;
}

// This input should return true
telephoneCheck("555-555-5555");
// This input should return true
telephoneCheck("1 555-555-5555")
