export const discountCalculation = (
    numerator: number,
    denominator: number
): number => {
    let result = ((denominator - numerator) / denominator) * 100
    return Math.round(result)
}