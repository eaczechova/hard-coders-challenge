
function largestOfFour(arr) {
  arr.forEach(function(element, index) {
    //forEach calls function on each element of the array, an example of an element [4, 5, 1, 3];
    arr[index] = element.reduce(function(a,b){
    // the aim of the reduce method is to reduce an array to a single value by executing callback function for each element of         the array;
    // parameter a stands for initial value, while b for current value;
      return Math.max(a, b);
    // Math.max() function returns the largest number of the numbers provided;
    //in here, initial value(a) is compared with the current value(b) e.g. 4 is compared with 5, then 5 becomes the initial value     and is compared with 1 and as 5 is Max value it stays as the initial value and is compared with 3. The final result is 5.
    });

  }); return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
