function confirmEnding(str, target) {
  var ending = str.split(' ').pop();
  // to split a string into an array of substrings wherever space ' ' is used as a separator, then remove and return the last       element of the array;
  ending = ending.substring(ending.length-target.length);
  // to return last characters of the string substring() method is used;
  //to extract number last characters from the string, a specified number of charcters was substructed from the target string       length;
  if(ending === target) {
    return true;
  } else {
    return false;
  }
}
confirmEnding("Open sesame", "same");
