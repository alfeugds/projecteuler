function isPrime(n) {
    let result = true

    if (n === 2) return true
    if (n === 3) return true

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            result = false
            break
        }
    }

    return result
}

function getNextPrime(p) {
    let n = p + 1
    while (!isPrime(n)) {
        n++
    }
    return n
}

let prime = 2
let nthPrime = 1

while (nthPrime !== 10001) {
    prime = getNextPrime(prime)
    nthPrime++
}

console.log('result: ', prime)

console.log(getNextPrime(2) === 3)
console.log(getNextPrime(3) === 5)
console.log(getNextPrime(5) === 7)
console.log(getNextPrime(7) === 11)
console.log(getNextPrime(11) === 13)
console.log(getNextPrime(13) === 17)

console.log(isPrime(2) === true)
console.log(isPrime(3) === true)
console.log(isPrime(4) === false)
console.log(isPrime(5) === true)
console.log(isPrime(6) === false)
console.log(isPrime(13) === true)
console.log(isPrime(11) === true)
console.log(isPrime(18) === false)
