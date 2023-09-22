import {beforeEach, describe, expect, it, vi} from "vitest";
import {UserRepository} from "../domain/repositories/UserRepository";
import {RegisterUser} from "./RegisterUser.js";
import {User} from "../domain/entities/User.js";

class UserRepositoryMock extends UserRepository {
    save() {
    }
}

class IdGeneratorMock {
    generate() {
        return 1;
    }
}


describe("RegisterUser", () => {
    let userRepository;
    let registerUser;

    beforeEach(() => {
        userRepository = new UserRepositoryMock();
        vi.spyOn(userRepository, "save")
        registerUser = new RegisterUser(userRepository, new IdGeneratorMock());
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
})
