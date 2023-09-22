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

    getId() {
        return this.id.id
    }

    getName() {
        return this.name.name;
    }

    getEmail() {
        return this.email.email;
    }

    getAge() {
        return this.age.age;
    }

    getHashedPassword() {
        return this.password.password;
    }
}
