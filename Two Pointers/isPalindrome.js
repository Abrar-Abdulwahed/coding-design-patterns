const isPalindrome = (num) => {
	if (num < 0) return false;
	const strNum = num.toString();
	const length = strNum.length;

	//Early return for single-digit numbers:
	if (length === 1) return true;

	for (let left = 0, right = length - 1; left < right; left++, right--) {
		if (strNum[left] !== strNum[right]) return false;
	}

	return true;
};

// Example usage
const num1 = 1297921;
const num2 = 1397921;

console.log(`${num1} is Palindrome? ${isPalindrome(num1)}`);
console.log(`${num2} is Palindrome? ${isPalindrome(num2)}`);
