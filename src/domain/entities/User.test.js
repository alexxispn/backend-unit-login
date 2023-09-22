import {describe, expect, it} from "vitest";
import {User} from "./User";

describe("User", () => {
    it("creates a new user with id)", () => {
        const user = new User(1, "Not Important", "notimportatn@gmai.com", 30, "123456");
        expect(user.getId()).toBe(1);
    })
    it("throws an error if any of the required fields is missing", () => {
        const createUser = () => new User(1, "John Doe", "hola@gmail.com", 30);
        expect(createUser).toThrow("Missing required fields");
    })
    it("throws an error if the age is less than 18", () => {
        const createUser = () => new User(1, "John Doe", "john@gmail.com", 17, "123456");
        expect(createUser).toThrow("Age must be greater than 18");
    })
    it("creates a new user with password hashed", () => {
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
