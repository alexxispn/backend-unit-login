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
        return crypto.createHash("sha256")
            .update(password)
            .digest("hex");
    }
}
