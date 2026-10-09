import dotenv from "dotenv";

dotenv.config();

export class configManager {

    static get URL(): string {
        return process.env.URL || "";
    }

    static get UserName(): string {
        return process.env.UserName || "";
    }

    static get PassWord(): string {
        return process.env.PassWord || "";
    }
}