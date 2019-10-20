import { isPrime, getPrimeFactors, getNextPrimeNumber } from './mathutils'

describe('test prime number', () => {
  it('validates prime numbers', () => {
    expect(isPrime(2)).toBe(true)
    expect(isPrime(3)).toBe(true)
    expect(isPrime(5)).toBe(true)
    expect(isPrime(7)).toBe(true)
  })
  it('validates non-prime numbers', () => {
    expect(isPrime(4)).toBe(false)
    expect(isPrime(6)).toBe(false)
    expect(isPrime(8)).toBe(false)
    expect(isPrime(9)).toBe(false)
    expect(isPrime(10)).toBe(false)
  })
})

describe('prime factors', () => {
  it('lists prime factors', () => {
    expect(getPrimeFactors(4)).toEqual([2, 2])
    expect(getPrimeFactors(6)).toEqual([2, 3])
    expect(getPrimeFactors(8)).toEqual([2, 2, 2])
    expect(getPrimeFactors(9)).toEqual([3, 3])
    expect(getPrimeFactors(10)).toEqual([2, 5])
    expect(getPrimeFactors(12)).toEqual([2, 2, 3])
  })
})

describe('get next prime number', () => {
  it('gets next prime number', () => {
    expect(getNextPrimeNumber(2)).toBe(3)
    expect(getNextPrimeNumber(3)).toBe(5)
    expect(getNextPrimeNumber(5)).toBe(7)
    expect(getNextPrimeNumber(7)).toBe(11)
    expect(getNextPrimeNumber(11)).toBe(13)
    expect(getNextPrimeNumber(13)).toBe(17)
    expect(getNextPrimeNumber(17)).toBe(19)
  })
})
