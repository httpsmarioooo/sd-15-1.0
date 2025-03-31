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

console.log(calificar(11)); // "Perfecto"
console.log(calificar(10)); // "Excelente"
console.log(calificar(6));  // "Pasa"
console.log(calificar(4));  // "Falla"