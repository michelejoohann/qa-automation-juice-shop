import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async acessarAplicacao() {
    await this.page.goto("http://localhost:3000/#/", {
      waitUntil: "domcontentloaded"
    });
  }

  async fecharDialogosIniciais() {
    await this.page.getByRole("button", { name: /dismiss/i })
      .click({ timeout: 5000 })
      .catch(() => {});

    await this.page.getByRole("button", { name: /me want it/i })
      .click({ timeout: 5000 })
      .catch(() => {});

    await this.page.locator("button[aria-label='Close Welcome Banner']")
      .click({ timeout: 3000 })
      .catch(() => {});
  }

  async abrirLogin() {
    await this.fecharDialogosIniciais();

    await this.page.locator("#navbarAccount")
      .click({ timeout: 10000, force: true });

    await this.page.locator("#navbarLoginButton")
      .click({ timeout: 10000, force: true });
  }

  async preencherLogin(email: string, senha: string) {
    await this.page.locator("#email").fill(email);
    await this.page.locator("#password").fill(senha);
  }

  async clicarEmLogin() {
    await this.page.locator("#loginButton").click();
  }

  async validarLoginComSucesso() {
    await expect(this.page.locator("#navbarAccount")).toBeVisible();
  }

  async validarErroDeLogin() {
    await expect(this.page.locator(".error")).toBeVisible();
  }
}