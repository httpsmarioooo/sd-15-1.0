export function rubricPassFail(puntuacion) {
    if (puntuacion >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(rubricPerfect(6)); // "Pasa"
console.log(rubricPerfect(4)); // "Falla"

