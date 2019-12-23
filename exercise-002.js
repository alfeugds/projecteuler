let x = 1
let y = 2
let sum = 0
let result = 2

while (y < 4000000) {
    sum = x + y
    if (sum % 2 === 0) {
        result += sum
    }
    x = y
    y = sum
}

console.log(result)