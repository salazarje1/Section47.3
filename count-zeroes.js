function countZeroes(arr) {
    if(arr[0] === 0) return arr.length;
    if(arr[arr.length - 1] === 1) return 0;  

    let lIdx = 0;
    let mIdx = Math.floor(arr.length / 2);

    while(mIdx >= 0){
        if(arr[mIdx] === 0 && arr[mIdx -1] === 1){
            console.log('if')
            return arr.length - mIdx;
        } else if (arr[mIdx] === 1){
            console.log('else if', mIdx)
            lIdx = mIdx; 
            mIdx = Math.floor((arr.length + lIdx) / 2);
        } else {
            console.log('else', mIdx); 
            mIdx = mIdx / 2; 
        }
    }
}


module.exports = countZeroes


//  l        m
//           l 
// [1, 1, 1, 1, 0, 0]