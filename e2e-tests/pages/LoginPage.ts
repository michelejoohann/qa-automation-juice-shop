import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async acessarAplicacao() {
    await this.page.goto("http://localhost:3000/#/", {
      waitUntil: "domcontentloaded"
    });
  }

  async fecharDialogosIniciais() {
    await this.page.locator("button[aria-label='Close Welcome Banner']")
      .click({ timeout: 5000, force: true })
      .catch(() => {});

    await this.page.getByRole("button", { name: /dismiss/i })
      .click({ timeout: 5000, force: true })
      .catch(() => {});

    await this.page.locator("a[aria-label='dismiss cookie message']")
      .click({ timeout: 5000, force: true })
      .catch(() => {});

    await this.page.getByRole("button", { name: /me want it/i })
      .click({ timeout: 5000, force: true })
      .catch(() => {});
  }

  async abrirLogin() {
    await this.fecharDialogosIniciais();

    await this.page.locator("#navbarAccount").waitFor({ state: "visible", timeout: 15000 });
    await this.page.locator("#navbarAccount").click({ force: true });

    await this.page.waitForTimeout(1000);

    const loginButton = this.page.locator("#navbarLoginButton");

    if (await loginButton.isVisible().catch(() => false)) {
      await loginButton.click({ force: true });
    } else {
      await this.page.goto("http://localhost:3000/#/login", {
        waitUntil: "domcontentloaded"
      });
    }

    await this.page.locator("#email").waitFor({ state: "visible", timeout: 15000 });
  }

  async preencherLogin(email: string, senha: string) {
    await this.page.locator("#email").waitFor({ state: "visible", timeout: 15000 });
    await this.page.locator("#email").fill(email);

    await this.page.locator("#password").waitFor({ state: "visible", timeout: 15000 });
    await this.page.locator("#password").fill(senha);
  }

  async clicarEmLogin() {
    await this.page.locator("#loginButton").click({ timeout: 10000, force: true });
  }

  async validarLoginComSucesso() {
    await expect(this.page.locator("#navbarAccount")).toBeVisible();
  }

  async validarErroDeLogin() {
    const loginButton = this.page.locator("#loginButton");

    await expect(loginButton).toBeVisible({ timeout: 10000 });

    const currentUrl = this.page.url();

    expect(currentUrl).toContain("/login");
  }
}