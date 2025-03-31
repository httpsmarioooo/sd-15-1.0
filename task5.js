export function rubricPassFail(score) {
    if (score >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(rubricPassFail(6)); // "Pasa"
console.log(rubricPassFail(4)); // "Falla"

