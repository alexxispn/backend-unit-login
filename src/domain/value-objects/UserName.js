export class UserName {
    constructor(name) {
        if (!this.validateName(name)) {
            throw new Error("Invalid name");
        }
        this.name = name;
    }

    validateName(name) {
        return name.length >= 3;
    }
}
