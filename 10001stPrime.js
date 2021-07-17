/*
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

const isPrime = function (number) {
    for (let index = 2; index <= Math.sqrt(number); index++) {
        if (number % index == 0) return false;
    }
    return true;
}

const main = () => {
    let largestPrime = 2;
    let counter = 1;
    let currentNumber = 2;
    while (counter < 10001) {
        if (isPrime(currentNumber + 1)) {
            largestPrime = currentNumber + 1;
            counter++;
        }
        currentNumber++;
    }
    return largestPrime;
}

console.log("The 10001st prime number is : " + main())