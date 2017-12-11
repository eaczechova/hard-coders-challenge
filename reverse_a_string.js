// Reverse the provided string.
function reverseString(str) {
  var string = str.split('');
  string = string.reverse();
  string = string.join('');

  return string;
}
reverseString("hello");