import { Locator, Page, } from "@playwright/test"
import { BasePage } from "./Base Page"

export class SignUppage extends BasePage { // inheritance

    // creating the locator Variable 

    private readonly Name: Locator;
    private readonly EmailAddress: Locator;
    private readonly SignUp: Locator;

    constructor(page: Page) {
        super(page);

        this.Name = page.getByPlaceholder("Name");
        this.EmailAddress = page.locator("input[data-qa='signup-email']")
        this.SignUp = page.getByRole("button", { name: "Signup" })
    }

    async enterName(name: string): Promise<void> {
        await this.enterText(this.Name, name);
    }
    async enterEmail(email: string): Promise<void> {
        await this.enterText(this.EmailAddress, email);
    }
    async clickSignUp(): Promise<void> {
        await this.clickElement(this.SignUp)
    }

    async newsignup(name: string, email: string) {
        await this.enterName(name);
        await this.enterEmail(email)
        await this.clickSignUp()


    }


}