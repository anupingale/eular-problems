/* Problem 1 :
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

const divisibleBy = (number, divider) => number % divider == 0

const main = (maxLimit) => {
    let sum = 0;
    for (let number = 1; number < maxLimit; number++){
        if(divisibleBy(number, 3) || divisibleBy(number, 5)) {
            sum += number;
        }
    }
    return sum
}

console.log("Sum of all the multiples of 3 or 5 below 1000 is "+ main(1000))