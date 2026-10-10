
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./Base Page";

export class Loginpage extends BasePage {

    private readonly Password: Locator;
    private readonly Email_Address: Locator;
    private readonly Login: Locator;
    private readonly errortext : Locator

    constructor(page: Page) {
        super(page);

        this.Password = page.getByPlaceholder("Password");
        this.Email_Address = page.locator("input[data-qa='login-email']");
        this.Login = page.getByRole("button", { name: "Login" });
        this.errortext = page.getByText('Your email or password is incorrect!', { exact: true })
    }

    async enterAddress(address: string): Promise<void> {
        await this.enterText(this.Email_Address, address);
    }

    async enterPassword(password: string): Promise<void> {
        await this.enterText(this.Password, password);
    }

    async clickLogin(): Promise<void> {
        await this.clickElement(this.Login);
    }

     async getErrorText(): Promise<string> {
        return await this.errortext.innerText();
    }



    async newLogin(email: string, password: string): Promise<void> {
        await this.enterAddress(email);
        await this.enterPassword(password);
        await this.clickLogin();
        await this.getErrorText()
    }
}
