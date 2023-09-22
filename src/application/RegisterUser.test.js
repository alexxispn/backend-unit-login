import {beforeEach, describe, expect, it, vi} from "vitest";
import {User} from "../domain/entities/User.js";
import {UserRepository} from "../domain/repositories/UserRepository";
import {IdGenerator} from "../domain/services/IdGenerator.js";
import {EmailSender} from "../domain/services/EmailSender.js";
import {RegisterUser} from "./RegisterUser.js";

class UserRepositoryMock extends UserRepository {
    save() {
    }
}

class IdGeneratorMock extends IdGenerator {
    generate() {
        return 1;
    }
}

class EmailSenderMock extends EmailSender {
    send() {
    }
}


describe("RegisterUser", () => {
    let userRepository;
    let registerUser;
    let emailSender;

    beforeEach(() => {
        userRepository = new UserRepositoryMock();
        vi.spyOn(userRepository, "save")
        emailSender = new EmailSenderMock();
        vi.spyOn(emailSender, "send");
        registerUser = new RegisterUser(userRepository, new IdGeneratorMock(), emailSender);
    })

    it("saves user on repository", () => {
        const notImportantName = "John Doe";
        const notImportantEmail = "email@gmail.com";
        const notImportantAge = 30;
        const notImportantPassword = "123456";

        registerUser.execute(notImportantName, notImportantEmail, notImportantAge, notImportantPassword);

        expect(userRepository.save).toHaveBeenCalledOnce();
    })
    it("saves user with correct params", () => {
        const name = "John Doe";
        const email = "email@gmail.com";
        const age = 30;
        const password = "123456";

        registerUser.execute(name, email, age, password);

        expect(userRepository.save).toHaveBeenCalledWith(new User(1, name, email, age, password));
    })
    it("sends an email when user is registered", () => {
        const notImportantName = "John Doe";
        const notImportantEmail = "email@gmail.com";
        const notImportantAge = 30;
        const notImportantPassword = "123456";

        registerUser.execute(notImportantName, notImportantEmail, notImportantAge, notImportantPassword);

        expect(emailSender.send).toHaveBeenCalledOnce();
    })
    it("sends an email with correct params", () => {
        const notImportantName = "John Doe";
        const email = "email@gmail.com";
        const notImportantAge = 30;
        const notImportantPassword = "123456";

        registerUser.execute(notImportantName, email, notImportantAge, notImportantPassword);

        expect(emailSender.send).toHaveBeenCalledWith(email);
    })
})
