/*
Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isPalindrome = (value) => {
    const stringVal = JSON.stringify(value)
    return stringVal == stringVal.split("").reverse().join("")
}

const main = () => {
    let largestPalindrome = 0;
    let counter1 = 999;
    while (counter1 >= 100) {
        let counter2 = 999;
        while (counter2 >= counter1) {
            const val = counter1 * counter2;
            if (val <= largestPalindrome) {
                break; // largest palidrome is always greater than mult of 2 counters
            }
            if (isPalindrome(val)) largestPalindrome = val;
            counter2 -= 1;
        }
        counter1 -= 1;
    }
    return largestPalindrome;
}

console.log("The largest palindrome made from the product of two 3-digit numbers : " + main())