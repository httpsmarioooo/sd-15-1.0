export function ageCalculator(year, month, day) {
    const today = new Date();
    let age = today.getFullYear() - year;

    if (today.getMonth() + 1 < month || (today.getMonth() + 1 === month && today.getDate() < day)) {
        age--;
    }

    return age;
}

console.log(ageCalculator(2000, 12, 25));
