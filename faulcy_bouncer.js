function bouncer(arr) {
  arr = arr.filter(function(i) {
    return Boolean(i) === true;
    }
  );
  return arr;
}

bouncer([7, "ate", "", false, 9]);
