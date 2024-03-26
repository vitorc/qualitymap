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

    constructor(page: Page, dayValue: number, monthValue: number, yearValue: number) {
        this.page = page;
        this.genderMale = page.locator("#gender-male");
        this.registerFirstNameField = page.locator("#FirstName");
        this.registerLastNameField = page.locator("#LastName");
        this.dayOfBirth = page.locator(`select[name="DateOfBirthDay"] option[value="${dayValue}"]`);
        this.monthOfBirth = page.locator(`select[name="DateOfBirthMonth"] option[value="${monthValue}"]`);
        this.yearOfBirth = page.locator(`select[name="DateOfBirthYear"] option[value="${yearValue}"]`);
        this.emailField = page.locator("#Email");
        this.companyName = page.locator("#Company");
        this.newsletter = page.locator("#Newsletter");
        this.registerPasswordField = page.locator("#password");
        this.registerConfirmPasswordField = page.locator("#password");
        this.registerButton = page.locator("#login-button");
        this.successMessage = page.locator(".success-message");
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

    async selectDateOfBirth() {
        await this.dayOfBirth.check();
        await this.monthOfBirth.check();
        await this.yearOfBirth.check();
    }

    async uncheckNewsletter() {
        await this.newsletter.uncheck();
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

    async verifyRegistrationSuccess() {
        await this.successMessage.waitFor({ state: 'visible' });
    }
}
