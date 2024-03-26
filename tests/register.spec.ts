import { chromium, expect, test } from '@playwright/test';
import { RegisterUser } from '../pageObjects/register.page';

test.describe('User registration', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/register");
        await expect(page).toHaveTitle("nopCommerce demo store. Register");

    })
    test.afterAll(async()=>{
        const browser = await chromium.launch();
        await browser.close();
    })
    
    test('Successful user registration', async ({ page }) => {
        const registerUser = new RegisterUser(page);
        await registerUser.fillRegistrationForm('FirstNameUser', 'LastNameUser', 'test@test4.com', 'Company Test', 'test123', 'test123');
        await registerUser.selectDateOfBirth(28);
        await registerUser.selectMonthOfBirth(11);
        await registerUser.selectYearOfBirth("1985");
        await registerUser.uncheckNewsletter();
        await registerUser.clickRegisterButton();
        await registerUser.verifyRegistrationSuccess();
    })

    
    test('Registration email already exists', async ({ page }) => {
        const registerUser = new RegisterUser(page);
        await registerUser.fillRegistrationForm('FirstNameUser', 'LastNameUser', 'test@test33.com', 'Company Test', 'test123', 'test123');
        await registerUser.selectDateOfBirth(28);
        await registerUser.selectMonthOfBirth(11);
        await registerUser.selectYearOfBirth("1985");
        await registerUser.uncheckNewsletter();
        await registerUser.clickRegisterButton();
        await registerUser.verifyEmailAlreadyExists();
    })

})


