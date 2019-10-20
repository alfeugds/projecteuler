import { getPrimeFactors } from './mathutils'

describe('Project Euler exercises', () => {
  it('1 - Find the sum of all the multiples of 3 or 5 below 1000', () => {
    /*
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Find the sum of all the multiples of 3 or 5 below 1000.
    */
    const limit = 1000
    let sum = 0
    let current = 3
    while (current < limit) {
      if (current % 3 === 0 || current % 5 === 0) sum += current

      current++
    }
    console.log('1:', sum)
  })

  it('3 - largest prime factor of the number 600851475143 ', () => {
    /*
    The prime factors of 13195 are 5, 7, 13 and 29.
    What is the largest prime factor of the number 600851475143 ?
    */
    const primeFactors = getPrimeFactors(600851475143)
    console.log('3:', primeFactors[primeFactors.length - 1])
  })
})
