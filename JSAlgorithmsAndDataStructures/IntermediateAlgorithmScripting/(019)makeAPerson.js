// This is a constructor that creates a Person instance
const Person = function(first, last) {
  let firstName = first;
  let lastName = last;

  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.getFirstName = function() {
    return firstName;
  }

  this.getLastName = function() {
    return lastName;
  }

  this.setFirstName = function(first) {
    return firstName = first;
  }

  this.setLastName = function(last) {
    return lastName = last;
  }

  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  }
};
