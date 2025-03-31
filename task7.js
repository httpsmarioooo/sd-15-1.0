export function rubricPerfect() {
    if (puntuacion === 11) {
        return "Perfect";
    } else if (puntuacion >= 9) {
        return "Excellent";
    } else if (puntuacion >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(rubricPerfect(11)); // "Perfecto"
console.log(rubricPerfect(10)); // "Excelente"
console.log(rubricPerfect(6));  // "Pasa"
console.log(rubricPerfect(4));  // "Falla"