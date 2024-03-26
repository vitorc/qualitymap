import { Locator, Page } from '@playwright/test';

export class RegisterUser {
    readonly page: Page;
    readonly genderMale: Locator;
    readonly registerFirstNameField: Locator;
    readonly registerLastNameField: Locator;
    readonly dayOfBirth: Locator;
    readonly monthOfBirth: Locator;
    readonly yearOfBirth: Locator;
    readonly emailField: Locator;
    readonly companyName: Locator;
    readonly newsletter: Locator;
    readonly registerPasswordField: Locator;
    readonly registerConfirmPasswordField: Locator;
    readonly registerButton: Locator;
    readonly successMessage: Locator;
    readonly errorEmailMessage: Locator;

    constructor(page: Page, dayValue: number, monthValue: number, yearValue: number) {
        this.page = page;
        this.genderMale = page.locator("#gender-male");
        this.registerFirstNameField = page.locator("#FirstName");
        this.registerLastNameField = page.locator("#LastName");
        this.dayOfBirth = page.locator(`select[name="DateOfBirthDay"]`);
        this.monthOfBirth = page.locator(`select[name="DateOfBirthMonth"]`);
        this.yearOfBirth = page.locator(`select[name="DateOfBirthYear"]`);
        this.emailField = page.locator("#Email");
        this.companyName = page.locator("#Company");
        this.newsletter = page.locator("#Newsletter");
        this.registerPasswordField = page.locator("#password");
        this.registerConfirmPasswordField = page.locator("#confirmPassword");
        this.registerButton = page.locator("#register-button");
        this.successMessage = page.locator("//div[@class='result']");
        this.errorEmailMessage = page.locator("#Email-error");
    }

    async fillRegistrationForm(firstName: string, lastName: string, email: string, companyName: string, password: string) {
        await this.genderMale.check();
        await this.registerFirstNameField.fill(firstName);
        await this.registerLastNameField.fill(lastName);
        await this.emailField.fill(email);
        await this.companyName.fill(companyName);
        await this.registerPasswordField.fill(password);
        await this.registerConfirmPasswordField.fill(password);
    }

    async selectDateOfBirth(dayValue: number, monthValue: number, yearValue: number) {
        await this.dayOfBirth.selectOption({ index: dayValue });
        await this.monthOfBirth.selectOption({ index: monthValue });
        await this.yearOfBirth.selectOption({ index: yearValue });
    }

    async uncheckNewsletter() {
        await this.newsletter.uncheck();
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

    async verifyRegistrationSuccess() {
        const successMessageText = await this.successMessage.textContent();
        if (successMessageText && successMessageText.includes('Your registration completed')) {
            console.log("Registration successful!");
        } else {
            console.error("Registration failed!");
        }
    }  
    async verifyEmailError() {
        const errorEmailMessageText = await this.errorEmailMessage.textContent();
        if (errorEmailMessageText && errorEmailMessageText.includes('Wrong email')) {
            console.log("Registration failed!");
        } else {
            console.error("Test failed!");
        }
    }
}
