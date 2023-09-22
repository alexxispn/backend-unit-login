export class UserAge {
    constructor(age) {
        if (!this.validateUserIsAdult(age)) {
            throw new Error("Age must be greater than 18");
        }
        this.age = age;
    }

    validateUserIsAdult(age) {
        return age >= 18;
    }
}
