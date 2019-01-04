console.log('start here')
window.onload = function (){
    let inpstr = document.getElementById('str')
    let calculatebtn = document.getElementById('calc')
    let rmsNeg = document.getElementById('rmsNeg')
    let rmsPos = document.getElementById('rmsPos')

    calculatebtn.onclick = function(){
        let arr = inpstr.innerText.split(',')
        let arr2 = arr.map(function (val) {
            return parseInt(val)
        })
        let arr3 = arr2.filter(function (val) {
            return val > 0
        })
        let arr4 = arr2.filter(function (val) {
            return val < 0
        })
        let arr5 = arr3.map(function (val) {
            return val * val
        })
        let arr6 = arr4.map(function (val) {
            return val * val
        })
        let arr7 = arr5.reduce(function (acc, val, idx, a) {
            return acc + val / a.length
        },0)
        let arr8 = arr6.reduce(function (acc, val, idx, a) {
            return acc + val / a.length
        },0)

        let plusrmsvalue = Math.sqrt(arr7)
        let minusrmsvalue = Math.sqrt(arr8)
        rmsNeg.innerText = minusrmsvalue;
        rmsPos.innerText = plusrmsvalue;
    } 
}