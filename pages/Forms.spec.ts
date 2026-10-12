import { Page, Locator } from '@playwright/test';

export class Forms {
  page: Page;
  simpleRegistrationForm: {
    username: Locator;
    email: Locator;
    password: Locator;
    country: Locator;
    countryOption: Locator;
    termsAndConditions: Locator;
    registerButtonLocator: Locator;
    resultNotificationLocator: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.simpleRegistrationForm = {
      username: page.locator('#username'),
      email: page.locator('#email'),
      password: page.locator('#password'),
      country: page.locator('#country'),
      countryOption: page.locator('#option'),
      termsAndConditions: page.locator('#terms'),
      registerButtonLocator: page.getByRole('button').filter({ hasText: 'Register' }),
      resultNotificationLocator: page.locator('#formResult'),
    };
  }

  async usernameFill(username: string = 'TEST') {
    await this.simpleRegistrationForm.username.fill(username);
  }

  async emailFill(email: string = 'test@test.com') {
    await this.simpleRegistrationForm.email.fill(email);
  }

  async passwordFill(password: string = '123456789') {
    await this.simpleRegistrationForm.password.fill(password);
  }

  async countrySelect(country: string = 'Russia') {
    await this.simpleRegistrationForm.country.selectOption(country);
  }

  async termsCheck() {
    await this.simpleRegistrationForm.termsAndConditions.check();
  }

  async registerClick() {
    await this.simpleRegistrationForm.registerButtonLocator.click();
  }
}
