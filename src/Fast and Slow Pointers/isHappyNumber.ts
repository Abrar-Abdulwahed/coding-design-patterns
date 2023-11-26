//! https://leetcode.com/problems/happy-number/
const isHappy = (n: number): boolean => {
    let slow = n;
    let fast = getNext(n);

    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }

    return fast === 1;
}

const getNext = (n: number): number => {
    let sum = 0;
    while (n > 0) {
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}

//Example Usage
const happyNum1 = 19;
const happyNum2 = 2;
console.log(`${happyNum1} is happy number? ${isHappy(happyNum1)}`);
console.log(`${happyNum2} is happy number? ${isHappy(happyNum2)}`);