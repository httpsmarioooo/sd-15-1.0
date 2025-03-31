export function rubricExcellent(score) {
    if (score >= 9) {
        return "Excellent";
    } else if (score >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(rubricExcellent(10)); // "Excelente"
console.log(rubricExcellent(6));  // "Pasa"
console.log(rubricExcellent(4));  // "Falla"
