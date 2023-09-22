import {User} from "../domain/entities/User.js";

export class RegisterUser {
    constructor(userRepository, idGenerator, emailSender) {
        this.userRepository = userRepository;
        this.idGenerator = idGenerator;
        this.emailSender = emailSender;
    }

    execute(name, email, age, password) {
        const user = new User(this.generateId(), name, email, age, password);
        this.userRepository.save(user);
        this.sendEmail(email);
    }

    generateId() {
        return this.idGenerator.generate();
    }

    sendEmail(email) {
        this.emailSender.send(email);
    }
}
