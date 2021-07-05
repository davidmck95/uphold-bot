import * as percentageCalculator from '@/utils/percentageCalculator'

describe('Percentage calculator util tests', () => {
    describe('calculatePriceMovementPercentage tests', () => {
        test('should return a positive number for a price increase', () => {
            const result = percentageCalculator.calculatePriceMovementPercentage(50, 70)
            expect(result).toEqual(40)
        })

        test('should return a double for a minimal price increase', () => {
            const result = percentageCalculator.calculatePriceMovementPercentage(50, 50.01)
            expect(result).toEqual(0.01999999999999602)
        })

        test('should return a negative double for a minimal price decrease', () => {
            const result = percentageCalculator.calculatePriceMovementPercentage(50, 49.99)
            expect(result).toEqual(-0.01999999999999602)
        })

        test('should return a negative number for a price decrease', () => {
            const result = percentageCalculator.calculatePriceMovementPercentage(50, 30)
            expect(result).toEqual(-40)
        })

        test('should return zero for no price movement', () => {
            const result = percentageCalculator.calculatePriceMovementPercentage(50, 50)
            expect(result).toEqual(0)
        })
    })
})