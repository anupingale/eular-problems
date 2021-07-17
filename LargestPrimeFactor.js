/*
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

const main = (number) => {
    let divider = 2
    let newNum = number
    while (newNum > 1) {
        if (newNum % divider == 0) newNum /= divider
        else divider += 1
    }
    return divider
}


console.log("The largest prime factor of the number 600851475143 : " + main(600851475143))

