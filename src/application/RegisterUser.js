import {User} from "../domain/entities/User.js";

export class RegisterUser {
    constructor(userRepository, idGenerator) {
        this.userRepository = userRepository;
        this.idGenerator = idGenerator;
    }

    execute(name, email, age, password) {
        const user = new User(this.generateId(), name, email, age, password);
        this.userRepository.save(user);
    }

    generateId() {
        return this.idGenerator.generate();
    }
}
