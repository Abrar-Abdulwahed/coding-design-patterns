//! Find the maximum subarray sum

const maxSubArraySum = (arr: number[], windowSize: number): number | null => {
	if (windowSize < 0 || windowSize > arr.length) return null;

	let currSum = 0;
	let maxSum = -Infinity;
	arr.forEach((elem, i) => {
		currSum += elem;
		if (i >= windowSize - 1) {
			maxSum = Math.max(currSum, maxSum);
			currSum -= arr[i - (windowSize - 1)];
		}
	});
	return maxSum;
};

// Example usage:
const arrExample = [1, 2, 10, 3, 4, 5, 6, 7, 10];
console.log(maxSubArraySum(arrExample, 3));
