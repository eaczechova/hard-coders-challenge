// Return the length of the longest word in the provided sentence.

// 1. Solution with forEach() and reduce() methods:

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

// 2. Solution with for loop:

function findLongestWord(str) {
  var string = str.split(' ');
  var stringLength = 0;
  for(var i = 0; i<string.length; i++) {
    if(string[i].length > stringLength) {
      stringLength = string[i].length;
    }
  }
  return stringLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
