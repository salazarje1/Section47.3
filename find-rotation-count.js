// Went througth the solution and tried to replicate it from what i rememebered.

function findRotationCount(arr, low = 0, high = arr.length - 1) {
    if(high < low) return 0; 
    if(high === low) return low; 
    
    let mid = Math.floor((low + high) / 2);

    if (mid < high && arr[mid + 1] < arr[mid]){
        return mid + 1; 
    } else if (mid > low && arr[mid] < arr[mid - 1]){
        return mid; 
    } else if (arr[high] > arr[mid]){
        return findRotationCount(arr, low, mid - 1); 
    } else {
        return findRotationCount(arr, mid + 1, high); 
    }
}

module.exports = findRotationCount