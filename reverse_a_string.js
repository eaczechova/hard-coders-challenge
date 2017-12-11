// Reverse the provided string.

// 1. solution with array methods

// function reverseString(str) {
//   var string = str.split('').reverse().join('');
//   return string;
// }
// reverseString("hello");

// 2. solution with string index

// function reverseString(str) {
//   var string = '';
//   for (var i = str.length-1; i>=0; i--) {
//     string += str[i];
//   }
//   return string;
// }
// reverseString("hello")

// 3. solution with charAt()

function reverseString(str) {
  var string = '';
  for (var i = str.length; i>=0; i--) {
    string += str.charAt(i);
  }
  return string;
}
reverseString("hello")
