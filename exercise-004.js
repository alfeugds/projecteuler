const limit = 999
let largest = 0

function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('')
}

for (let i = limit; i > 100; i--) {
    for (let j = limit; j > 100; j--) {
        const product = i * j
        if (isPalindrome(product)) {
            if (product > largest) {
                largest = product
            }
        }
    }
}

console.log(largest)

console.log(isPalindrome(123))
console.log(isPalindrome(12321))
console.log(isPalindrome(9009))