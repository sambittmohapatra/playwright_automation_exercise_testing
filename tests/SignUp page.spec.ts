
import { test, expect } from "@playwright/test";
import { SignUppage } from "../pages/SignUp Page";
import { configManager } from "../ConfigManager";

test("Signup Test", async ({ page }) => {

    const signup = new SignUppage(page);

    // Read URL from .env file
    const url = configManager.URL;

    console.log("URL from .env:", url);

    // Navigate to URL
    await signup.navigateToURL(url);

    // click on the signupLink

    await page.getByRole('link', { name: 'Signup / Login' }).click()


    // Fill signup form
    await signup.newsignup("Sambit", "sambit123@gmail.com");

    // Verify URL
    await expect(page).toHaveURL("https://automationexercise.com/signup");


});

