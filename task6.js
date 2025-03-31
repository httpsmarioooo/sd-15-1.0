export function rubricExcellent() {
    if (puntuacion >= 9) {
        return "Excellent";
    } else if (puntuacion >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(rubricPerfect(10)); // "Excelente"
console.log(rubricPerfect(6));  // "Pasa"
console.log(rubricPerfect(4));  // "Falla"
