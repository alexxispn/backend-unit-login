import crypto from "node:crypto";

export class UserPassword {
    constructor(password) {
        if (!this.validatePassword(password)) {
            throw new Error("Password must be at least 6 characters");
        }
        this.hashPassword(password);
    }

    validatePassword(password) {
        return password.length >= 6;
    }

    hashPassword(password) {
        const salt = crypto.randomBytes(16).toString("hex");
        const hash = crypto
            .pbkdf2Sync(password, salt, 1000, 64, "sha512")
            .toString("hex");
        this.password = { salt, hash };
    }
}
