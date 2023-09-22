import {IdGenerator} from "../domain/services/IdGenerator.js";

export class IdGeneratorIncrement extends IdGenerator {
    constructor() {
        super();
        this.id = 0;
    }

    generate() {
        this.id++;
        return this.id;
    }
}
