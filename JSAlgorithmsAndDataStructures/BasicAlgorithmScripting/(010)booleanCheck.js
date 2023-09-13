// This function checks if a given value is classified as a boolean primitive.
function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  
  return false;
}

booWho(null);
