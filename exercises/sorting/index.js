// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let sorted = false;
    while(sorted == false) {
        let aChange = false;
        for(let i = 0; i < arr.length -1; i++) {
            if(arr[i] > arr[i+1]) {
                let flag = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = flag;
                aChange = true;
            }
        }
        sorted = (aChange == false) ? true : false;
    }
    return arr;
}

function selectionSort(arr) {
    for(let n = 0; n < arr.length; n++) {
        let smallest = arr[n];
        let smallest_pos = n;
        for(let i = n+1; i < arr.length; i++) {
            if(arr[i] < smallest) {
                smallest_pos = i;
                smallest = arr[i];
            }
        }
        arr[smallest_pos] = arr[n];
        arr[n] = smallest;
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let i = Math.floor(arr.length / 2);
    let left = arr.slice(0, i);
    let right = arr.slice(i);
    left = mergeSort(left);
    right = mergeSort(right);    
    return merge(left, right);
}

function merge(left, right) {
    let results = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
