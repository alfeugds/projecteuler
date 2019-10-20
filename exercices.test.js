import { getPrimeFactors } from './mathutils'

describe('Largest prime factor', () => {
  /*
  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?
  */
  it('3 - largest prime factor of the number 600851475143 ', () => {
    const primeFactors = getPrimeFactors(600851475143)
    console.log('3:', primeFactors[primeFactors.length - 1])
  })
})
