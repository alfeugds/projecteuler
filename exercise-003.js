const isPrime = number => {
    const sqrt = Math.sqrt(number)
    for (let i = 2; i <= sqrt; i++) {
        if (number % i === 0) return false
    }

    return number > 1
}

const getNextPrimeNumber = (n) => {
    let next = n + 1
    while (!isPrime(next)) next++

    return next
}

const getPrimeFactors = (number) => {
    if (number === 2) return 2

    const primeFactors = []
    let i = 2
    let remaining = number
    while (remaining / i !== 1) {
        if (remaining % i === 0) {
            primeFactors.push(i)
            remaining = remaining / i
        } else {
            i = getNextPrimeNumber(i)
        }
    }
    primeFactors.push(remaining)
    return primeFactors
}

const primeFactors = getPrimeFactors(600851475143)
console.log('3:', primeFactors[primeFactors.length - 1])