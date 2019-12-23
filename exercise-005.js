/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function isDivisible(n) {
    let result = true
    for (let i = 1; i <= 20; i++) {
        if (n % i !== 0) {
            result = false
            break
        }
    }
    return result
}

let n = 99999999

while (!isDivisible(n) && n < 999999999) {
    n++
}

console.log(n)
console.log('expected:', 232792560)

console.log('correct? ', 232792560 === n)

// console.log(isDivisible(2520))
// console.log(isDivisible(2521))
// console.log(isDivisible(154))