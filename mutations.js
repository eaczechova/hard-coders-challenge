function mutation(arr) {


  var array1 = arr[0].toLowerCase();
  var array2 = arr[1].toLowerCase();
  array2.split('');
  var points = 0;

  for (var i = 0; i<array2.length; i++) {
    if(array1.indexOf(array2[i]) !== -1) {
      points +=1;
    }
  }

  if(points===array2.length){
    return true;
  } else {
    return false;
  }
}

mutation(["hello", "hey"]);
