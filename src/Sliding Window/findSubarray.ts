//! Find first subarray that has the given sum

const findSubarray = (arr: number[], target: number): number[] | string => {
	// current window sum
	let windowSum = 0;

	// window [low, high-1]
	let high = -1;

	for (let low = 0; low < arr.length; low++) {
		// if the current window's sum is less than the given sum,
		// then add elements to the current window from the right
		while (windowSum < target && high < arr.length) {
			high++;
			windowSum += arr[high];
		}

		if (windowSum === target) return [low, high];

		// At this point, the current window's sum is more than the given sum.
		// Remove the current element (leftmost element) from the window
		windowSum -= arr[low];
	}
	// If no subarray is found, return a message
	return 'No subarray found';
};

// Example usage:
let arr: number[] = [1, 6, 0, 9, 2, 8, 6, 2, 0, 8];
let target: number = 15;

let result = findSubarray(arr, target);

if (Array.isArray(result)) {
	// Print the indices of the subarray
	console.log(`Subarray found at range of index [${result[0]}–${result[1]}]`);
} else {
	// Print the message for no subarray found
	console.log(result);
}
