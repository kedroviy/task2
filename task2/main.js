diff = function (a1, a2) {
    return a1.filter(i=>!a2.includes(i))
    .concat(a2.filter(i=>!a1.includes(i)))
}
compare = function (a1, a2) {
    return a1.length == a2.length && a1.every((v,i)=>v === a2[i])
}

var a1, a2, diffResult, compResult

arr = [1, 2, 3, 4, 5]
brr = [1, 2, 3, 4]
var b =  compResult = compare(arr, brr); {
         diffResult = diff(arr, brr)
}
  console.log(b)
