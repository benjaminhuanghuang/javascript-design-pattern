/*
    modules are the most prevalently used design patterns for keeping particular pieces of code 
    independent of other components.

    Modules should be Immediately-Invoked-Function-Expressions (IIFE) to allow for private scopes

    Code outside of our closure is unable to access these private variables since it is not in 
    the same scope
*/

var Exposer = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }

  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }

  var otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
  };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined     
Exposer.privateVariable; // undefined 

