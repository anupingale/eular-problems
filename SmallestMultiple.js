/*
Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const isDivisibleBy = (num, divider) => num % divider == 0
const isDivisibleByAll = (number, largestIndex) => {
    let dividers = [...Array(largestIndex)].map((_, i) => i + 1)
    return dividers.every(isDivisibleBy.bind(this, number))
}

const main = () => {
    const largestNum = 20;
    let ans = 0;
    let counter = 1;
    while (ans == 0) {
        const currentNumber = largestNum * counter;
        if (isDivisibleByAll(currentNumber, largestNum - 1)) ans = currentNumber;
        else counter++;
    }
    return ans;
}

console.log("The smallest positive number that is evenly divisible by all of the numbers from 1 to 20 : " + main())