let str = "1,2,-3,-4,5"
let arr = str.split()
console.log(arr);
let arr2 = arr.map(function (val) {
    return parseInt(val)
})
console.log(arr2)
let arr3 = arr2.filter(function (val) {
    return val > 0
})
let arr4 = arr2.filter(function (val) {
    return val < 0
})
console.log(arr3);
console.log(arr4);
let arr5 = arr3.map(function (val) {
    return val * val
})
let arr6 = arr4.map(function (val) {
    return val * val
})
console.log(arr5);
console.log(arr6);
let arr7 = arr5.reduce(function (acc, val, idx, a) {
    return acc + val / a.length
}, 0)
let arr8 = arr6.reduce(function (acc, val, idx, a) {
    return acc + val / a.length
}, 0)
console.log(arr7);
console.log(arr8);
let plusrmsvalue = Math.sqrt(arr7)
let minusrmsvalue = Math.sqrt(arr8)
console.log(plusrmsvalue);
console.log(minusrmsvalue);
