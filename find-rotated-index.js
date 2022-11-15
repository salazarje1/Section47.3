// started writing the function on my own was head the right way just couldnt figure out
// what i was doing wrong. Studied the solution and understood it before copying it. 

function findRotatedIndex(arr, num) {
    let mIdx = findMiddle(arr); 
    if(mIdx > 0 && num >= arr[0] && num <= arr[mIdx - 1]) {
        return binarySearch(arr, num, 0, mIdx - 1); 
    } else {
        return binarySearch(arr, num, mIdx, arr.length - 1); 
    }
}

function binarySearch(arr, num, start, end){
    if(arr.length === 0) return -1; 
    if(num < arr[start] || num > arr[end]) return -1; 

    while (start <= end) {
        let mid = Math.floor((start + end) / 2); 
        if(arr[mid] === num){
            return mid; 
        } else if(num < arr[mid]){
            end = mid - 1; 
        } else {
            start = mid + 1; 
        }
    }
    return -1; 
}

function findMiddle(arr) {
    if(arr.length === 1 || arr[0] < arr[arr.length -1]) return 0; 
    let start = 0; 
    let end = arr.length - 1; 

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] > arr[mid + 1]) {
            return mid + 1; 
        } else if (arr[start] <= arr[mid]) {
            start = mid + 1; 
        } else {
            end = mid - 1; 
        }
    }
}


module.exports = findRotatedIndex