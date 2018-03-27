// task 1

var arr = [0, 0, 0, 1, 3, 2, 5];
console.log(arr);

// task 1.1

min = arr[0];
  max = min;
  for (i = 0; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
      if (arr[i] < min) min = arr[i];
  }
//   var arr = [0, 0, 0, 1, 3, 2, 5];
//  arr.sort();
//  var m = Math.max([0], [5]);
// console.log(m);

console.log(max)

// task 1.2

console.log(min)
// var arr = [0, 0, 0, 1, 3, 2, 5];
//  arr.sort();
//  var m = Math.min([0], [5]);
// console.log(m);

// task 1.3

var arr = [0, 0, 0, 1, 3, 2, 5];
 var summ = arr.reduce(function(sum, current) {
  return sum + current
});
console.log(summ);

// task 1.4

var arr = [0, 0, 0, 1, 3, 2, 5];
var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);
var sr = (result / arr.length);
		sr = sr.toFixed(2);
console.log(sr)
