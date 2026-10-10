
import { test, expect } from "@playwright/test";
import { Loginpage } from "../pages/Login Page";
import { configManager } from "../ConfigManager";


test("NewLogin Test", async ({ page }) => {

    const login = new Loginpage(page);

    // Read URL from .env file
    const url = configManager.URL;

    console.log("URL from .env:", url);

    // Navigate to URL
    await login.navigateToURL(url);
    

    // click on the signupLink

    await page.getByRole('link', { name: 'Signup / Login' }).click()


    // Fill signup form
    await login.newLogin("sambit123@gmail.com", "sambit");

    // validate error text displayed 

    const errorText = await login.getErrorText();
    expect(errorText).toBe("Your email or password is incorrect!");


});
