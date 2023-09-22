import {UserId} from '../value-objects/UserId';
import {UserName} from '../value-objects/UserName';
import {UserEmail} from '../value-objects/UserEmail';
import {UserAge} from '../value-objects/UserAge';
import {UserPassword} from '../value-objects/UserPassword';

export class User {

    constructor(id, name, email, age, password) {
        if (!id || !name || !email || !age || !password) {
            throw new Error("Missing required fields");
        }
        this.id = new UserId(id);
        this.name = new UserName(name);
        this.email = new UserEmail(email)
        this.age = new UserAge(age);
        this.password = new UserPassword(password);
    }

    hasId(id) {
        return this.id.id === id;
    }

    hasName(name) {
        return this.name.name === name;
    }

    hasEmail(email) {
        return this.email.email === email;
    }

    hasAge(age) {
        return this.age.age === age;
    }

    getHashedPassword() {
        return this.password;
    }
}
