export const metabolismeMenCalculation = (weight, size, age) => {
    const mb = (13.707 * weight) + (492.3 * (size / 100)) - (6.673 * age) + 77.607;
    return mb;
}

export const metabolismeWomanCalculation = (weight, size, age) => {
    const mb = (9.740 * weight) + (172.9 * (size / 100)) - (4.737 * age) + 667.051;
    return mb;
}