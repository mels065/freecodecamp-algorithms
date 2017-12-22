var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var first = firstAndLast.split(' ')[0];
  var last = firstAndLast.split(' ')[1];

  this.getFirstName = function() {
    return first;
  };

  this.getLastName = function() {
    return last;
  };

  this.getFullName = function() {
    return `${this.getFirstName()} ${this.getLastName()}`;
  };

  this.setFirstName = function(newName) {
    first = newName;
  };

  this.setLastName = function(newName) {
    last = newName;
  };

  this.setFullName = function(newName) {
    this.setFirstName(newName.split(' ')[0]);
    this.setLastName(newName.split(' ')[1]);
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
