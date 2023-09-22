export class UserAge {
    constructor(age) {
        if (!this.ensureIsAdult(age)) {
            throw new Error("Age must be greater than 18");
        }
        this.age = age;
    }

    ensureIsAdult(age) {
        return age >= 18;
    }
}
