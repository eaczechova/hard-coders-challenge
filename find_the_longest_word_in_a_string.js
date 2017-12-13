function findLongestWord(str) {
  var string = str.split(' ');
  string.forEach(function(element, index){
    string[index] = element.length;

  });

  var max = string.reduce(function(a, b) {
  return Math.max(a, b);
});
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
