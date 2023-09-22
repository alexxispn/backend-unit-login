import {beforeEach, describe, expect, it, vi} from "vitest";
import {IdGeneratorIncrement} from "./IdGeneratorIncrement.js";

describe("IdGeneratorIncrement", () => {
    let idGenerator;

    beforeEach(() => {
        idGenerator = new IdGeneratorIncrement();
    })

    it("generates a new id", () => {
        expect(idGenerator.generate()).toBe(1);
        expect(idGenerator.generate()).toBe(2);
        expect(idGenerator.generate()).toBe(3);
    })
})
