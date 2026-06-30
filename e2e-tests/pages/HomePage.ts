import { Page } from "playwright";

export class HomePage {
  constructor(private page: Page) {}

  async open(baseUrl: string) {
    await this.page.goto(baseUrl);
    await this.page.getByText("Dismiss").click().catch(() => {});
    await this.page.getByText("Me want it!").click().catch(() => {});
  }

  async goToLogin() {
    await this.page.click("#navbarAccount");
    await this.page.click("#navbarLoginButton");
  }

  async searchProduct(term: string) {
    await this.page.click("mat-icon:has-text('search')");
    await this.page.fill("#mat-input-0", term);
    await this.page.keyboard.press("Enter");
  }

  async addFirstProductToBasket() {
    await this.page.locator("button[aria-label='Add to Basket']").first().click();
  }
}
