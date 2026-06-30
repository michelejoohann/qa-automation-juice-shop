import { Page } from "playwright";

export class LoginPage {
  constructor(private page: Page) {}

  async login(email: string, password: string) {
    await this.page.fill("#email", email);
    await this.page.fill("#password", password);
    await this.page.click("#loginButton");
  }

  async isErrorVisible() {
    return await this.page.locator(".error, .mat-error").first().isVisible();
  }
}
