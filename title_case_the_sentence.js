
function titleCase(str) {
  var x = str.toLowerCase().split(' ');
  for (var i = 0; i<x.length; i++) {
    x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1);
  }
   return x.join(' ');
}

titleCase("I'm a little tea pot");
