import {describe, expect, it} from "vitest";
import {User} from "./User";

describe("User", () => {
    it("creates a new user with id)", () => {
        const id = 1;
        const user = new User(id, "Not Important", "notimportatn@gmai.com", 30, "123456");
        expect(user.hasId(id)).toBe(true);
    })
    it("creates a new user with name)", () => {
        const name = "John Doe";
        const user = new User(1, name, "notimportant@gmail.com", 30, "123456");
        expect(user.hasName(name)).toBe(true);
    })
    it("creates a new user with email)", () => {
        const email = "john@gmail.com";
        const user = new User(1, "John Doe", email, 30, "123456");
        expect(user.hasEmail(email)).toBe(true);
    })
    it("creates a new user with age)", () => {
        const age = 30;
        const user = new User(1, "John Doe", "notimportant@gmail.com", age, "123456");
        expect(user.hasAge(age)).toBe(true);
    })
    it("throws an error if any of the required fields is missing", () => {
        const createUser = () => new User(1, "John Doe", "hola@gmail.com", 30);
        expect(createUser).toThrow("Missing required fields");
    })
    it("throws an error if the age is less than 18", () => {
        const createUser = () => new User(1, "John Doe", "john@gmail.com", 17, "123456");
        expect(createUser).toThrow("Age must be greater than 18");
    })
    it.only("creates a new user with password hashed", () => {
        const user = new User(1, "John Doe", "john@gmail.com", 30, "123456");
        expect("123456").not.toBe(user.getHashedPassword());
        expect(user.getHashedPassword()).toBeDefined()
    })
    it("throws an error if the password is less than 6 characters", () => {
        const createUser = () => new User(1, "John Doe", "john@gmail.com", 30, "123");
        expect(createUser).toThrow("Password must be at least 6 characters");
    })
    it("throws an error if the email is invalid", () => {
        const createUser = () => new User(1, "John Doe", "john", 30, "123456");
        expect(createUser).toThrow("Invalid email");
    })
})
