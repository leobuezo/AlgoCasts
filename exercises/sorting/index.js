// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let sorted = false;
    while(sorted == false) {
        aChange = false;
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

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
