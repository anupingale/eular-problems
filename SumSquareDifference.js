/*
Problem 6
The sum of the squares of the first ten natural numbers is,
The square of the sum of the first ten natural numbers is,
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

Reference Link : https://www.cuemath.com/algebra/sum-of-squares/
*/

const square = (num) => num * num;

const main = (limit) => {
    const numbers = [...Array(limit)].map((_, i) => i + 1)
    const sumOfNumbers = (limit * (limit + 1)) / 2; // formula [ n*(n+1) ] /2
    const sumOfSquares = (limit * (limit + 1) * ((2 * limit) + 1)) / 6  //formula [n*(n+1)*(2n+1)] / 6
    return square(sumOfNumbers) - sumOfSquares
}

console.log("The difference between the sum of the squares of the first one hundred natural numbers and the square of the sum : " + main(100))