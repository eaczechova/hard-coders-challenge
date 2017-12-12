
function palindrome(str) {
  var stringClear = str.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
  var reversedString = '';
  for (var i = stringClear.length-1; i >=0 ; i--) {
    reversedString += stringClear[i];
  }
  if (reversedString == stringClear) {
  return true;
  } else {
    return false;
  }
}

palindrome("eye");
