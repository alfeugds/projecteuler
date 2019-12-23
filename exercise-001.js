const limit = 1000
let sum = 0
let current = 3
while (current < limit) {
    if (current % 3 === 0 || current % 5 === 0) sum += current

    current++
}
console.log('1:', sum)