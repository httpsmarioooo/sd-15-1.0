export function costCalculator(valor) {
    const total = parseFloat(valor) + 3 + (parseFloat(valor) * 0.01);
    return total.toFixed(2);

}

// console.log(costCalculator("3"));