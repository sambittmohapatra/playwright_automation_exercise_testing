import { Page, Locator } from "@playwright/test";

export class BasePage {

    constructor(public page: Page) {}

    // 1. Navigate to URL
    async navigateToURL(url: string): Promise<void> {
        await this.page.goto(url);
    }

    // 2. Click element
    async clickElement(locator: Locator): Promise<void> {
        await locator.click();
    }

    // 3. Enter text
    async enterText(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
    }

    // 4. Clear text
    async clearText(locator: Locator): Promise<void> {
        await locator.clear();
    }

    // 5. Get text
    async getText(locator: Locator): Promise<string> {
        return await locator.innerText();
    }

    // 6. Get input value
    async getInputValue(locator: Locator): Promise<string> {
        return await locator.inputValue();
    }

    // 7. Check element visibility
    async isElementVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

    // 8. Check element enabled
    async isElementEnabled(locator: Locator): Promise<boolean> {
        return await locator.isEnabled();
    }

    // 9. Check element disabled
    async isElementDisabled(locator: Locator): Promise<boolean> {
        return await locator.isDisabled();
    }

    // 10. Get element count
    async getElementCount(locator: Locator): Promise<number> {
        return await locator.count();
    }

    // 11. Hover over element
    async hoverElement(locator: Locator): Promise<void> {
        await locator.hover();
    }

    // 12. Select dropdown option
    async selectDropdownOption(locator: Locator, value: string): Promise<void> {
        await locator.selectOption(value);
    }

    // 13. Check checkbox
    async checkCheckbox(locator: Locator): Promise<void> {
        await locator.check();
    }

    // 14. Uncheck checkbox
    async uncheckCheckbox(locator: Locator): Promise<void> {
        await locator.uncheck();
    }

    // 15. Get attribute value
    async getAttributeValue(locator: Locator, attribute: string): Promise<string | null> {
        return await locator.getAttribute(attribute);
    }

    // 16. Wait for element to be visible
    async waitForElement(locator: Locator): Promise<void> {
        await locator.waitFor({ state: "visible" });
    }

    // 17. Press keyboard key
    async pressKey(locator: Locator, key: string): Promise<void> {
        await locator.press(key);
    }

    // 18. Upload file
    async uploadFile(locator: Locator, filePath: string): Promise<void> {
        await locator.setInputFiles(filePath);
    }

    // 19. Take screenshot
    async takeScreenshot(filePath: string): Promise<void> {
        await this.page.screenshot({ path: filePath });
    }

    // 20. Refresh page
    async refreshPage(): Promise<void> {
        await this.page.reload();
    }

    // 21. Navigate back
    async goBack(): Promise<void> {
        await this.page.goBack();
    }

    // 22. Navigate forward
    async goForward(): Promise<void> {
        await this.page.goForward();
    }

    // 23. Get page title
    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }

    // 24. Get current URL
    async getCurrentURL(): Promise<string> {
        return this.page.url();
    }

    // 25. Wait for page load
    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState("domcontentloaded");
    }
   
}