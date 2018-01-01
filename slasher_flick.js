function slasher(arr, howMany) {

    arr = arr.splice(howMany);
  // assigns the string that was cut e.g. if howMany == 5 it will return all the string starting from index 5;
    return arr;
  }



slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
