// This function takes a string as input and converts it to a string with all lowercase words joined by dashes
function spinalCase(str) {
  // create regex for white space, underscores, or lowercase letter followed by uppercase letter
  var regex = /\s|_|(?=[A-Z])/;

  return str.split(regex).join("-").toLowerCase();
}

// This input should return "this-is-spinal-tap"
spinalCase('This Is Spinal Tap');
