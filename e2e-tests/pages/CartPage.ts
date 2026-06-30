import { Page, expect } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async adicionarPrimeiroProdutoAoCarrinho() {
    await this.page.getByRole("button", { name: /add to basket/i })
        .first()
        .scrollIntoViewIfNeeded();

    await this.page.getByRole("button", { name: /add to basket/i })
        .first()
        .click({ timeout: 15000, force: true });
    }

  async validarCarrinhoComItem() {
    await expect(this.page.locator(".fa-layers-counter")).not.toHaveText("0", {
      timeout: 10000
    });
  }
}