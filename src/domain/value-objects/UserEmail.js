export class UserEmail {
    constructor(email) {
        if (!this.validateEmail(email)) {
            throw new Error("Invalid email");
        }
        this.email = email;
    }

    validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    getEmail() {
        return this.email;
    }
}
