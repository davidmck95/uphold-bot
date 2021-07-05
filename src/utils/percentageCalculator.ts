
export const calculatePriceMovementPercentage = (previousPrice, newPrice): number => {
    const priceIncrease: boolean = newPrice >= previousPrice
    const difference: number = newPrice - previousPrice
    const percentageMovement: number = (difference / previousPrice) * 100
    return priceIncrease ? percentageMovement : -Math.abs(percentageMovement)
}

export const shouldAlertPriceOscillation = (percentageMovement, minimumMovement): boolean => {
    return Math.abs(percentageMovement) >= Math.abs(minimumMovement) ? true : false
}
