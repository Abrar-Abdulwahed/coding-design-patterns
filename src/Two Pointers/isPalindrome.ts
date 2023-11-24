const isPalindrome = <T>(input: T): boolean => {
	const strNum = String(input);
	const length = strNum.length;

	// Early return for single-character inputs:
	if (length === 1) return true;

	for (let left = 0, right = length - 1; left < right; left++, right--) {
		if (strNum[left] !== strNum[right]) return false;
	}

	return true;
};

// Example usage
const num1 = 1297921;
const num2 = 1397921;
const str1 = 'racecar';
const str2 = 'hello';

console.log(`${num1} is Palindrome? ${isPalindrome(num1)}`);
console.log(`${num2} is Palindrome? ${isPalindrome(num2)}`);
console.log(`${str1} is Palindrome? ${isPalindrome(str1)}`);
console.log(`${str2} is Palindrome? ${isPalindrome(str2)}`);
