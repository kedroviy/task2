// task 1

var arr = [0, 0, 0, 1, 3, 2, 5];
console.log(arr);

// task 1.1

var arr = [0, 0, 0, 1, 3, 2, 5];

var value = arr.reduce (function(a,b){

	return Math.max(a, b) 
  });


	console.log(value)



// task 1.2

var arr = [0, 0, 0, 1, 3, 2, 5];

var value = arr.reduce (function(a,b){

	return Math.min(a, b)
  });


	console.log(value)
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
console.log(sr);


var arr = [0, 0, 0, 1, 3, 2, 5]

 // function maxValue(){
 	var sortir = arr.sort();
  var max =

console.log(maxValue);
};
