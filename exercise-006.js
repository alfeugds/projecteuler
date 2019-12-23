
function getSumOfSquares(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += Math.pow(i, 2)
    }
    return sum
}

function getSquareOfSum(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return Math.pow(sum, 2)
}


console.log(getSumOfSquares(10) === 385)
console.log(getSquareOfSum(10) === 3025)

console.log(getSumOfSquares(3) === 14)

console.log(getSquareOfSum(10) - getSumOfSquares(10))
console.log(getSquareOfSum(10) - getSumOfSquares(10) === 2640)

console.log(getSquareOfSum(100) - getSumOfSquares(100))

