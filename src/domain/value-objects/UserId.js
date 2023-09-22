export class UserId {
    constructor(id) {
        if (!this.validateId(id)) {
            throw new Error("Invalid id");
        }
        this.id = id;
    }

    validateId(id) {
        return id >= 1;
    }
}
