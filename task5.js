export function rubricPassFail(puntuacion) {
    if (puntuacion >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(calificar(6)); // "Pasa"
console.log(calificar(4)); // "Falla"

