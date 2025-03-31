export function rubricPassFail(puntuacion) {
    if (puntuacion >= 5  && puntuacion <= 11){
        return "Pass";
    } else if (puntuacion <5){
        return "Fail"
    }
}

console.log(rubricPassFail(6));
console.log(rubricPassFail(2));
console.log(rubricPassFail(1));
console.log(rubricPassFail(11));
console.log(rubricPassFail(12));


