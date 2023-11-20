//! Find the maximum subarray sum

const maxSubArraySum = (arr, window_size) => {
    if(window_size < 0 || window_size > arr.length === 0) return null;

    let currSum = 0;
    let maxSum = -Infinity;
    arr.forEach((elem, i) => {
        currSum += elem;
        if(i >= (window_size - 1)){
            maxSum = Math.max(currSum, maxSum);
            currSum -= arr[i - (window_size - 1)]
        }
    });
    return maxSum;
}


// Example usage:
const arr = [1, 2, 10, 3, 4, 5, 6, 7, 10];
console.log(maxSubArraySum(arr, 3));