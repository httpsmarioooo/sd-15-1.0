export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    returnAge() {
        const today = new Date();
        const birthDate = new Date(this.year, this.month - 1, this.day);
        let age = today.getFullYear() - birthDate.getFullYear();
        if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) age--;
        return `${this.name} is ${age} today!`;
    }
}