// task 1

var arr = [0, 0, 0, 1, 3, 2, 5];
console.log(arr);

// task 1.1

var arr = [0, 0, 0, 1, 3, 2, 5];
console.log(Math.max.apply(null, arr))

// task 1.2

var arr = [0, 0, 0, 1, 3, 2, 5];
console.log(Math.min.apply(null, arr))


// task 1.3

var arr = [0, 0, 0, 1, 3, 2, 5];
 var summ = arr.reduce(function(sum, current) {
  return sum + current
});
console.log(summ);

// task 1.4

var arr = [2,	6,	5,	2,	3,	2,	12,	1,	2,	4];
var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);
var sr = (result / arr.length);
		sr = sr.toFixed(2);
console.log(sr);

// task 1.5

var arr = [0, 0, 0, 8, 12, 3, 2, 5, 4, 22, 44]
for (var i = 0; i < arr.length; i++){
  if (arr[i] % 2){
  	console.log (arr[i])
  }
}


// task 4



str = "obirvalg"
function reverseStr(str) {
	var t = str
	return str.split("").reverse().join("");
  }

	console.log(reverseStr(str));
