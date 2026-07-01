import { Page, expect } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: Page) {}

  async fecharPopups() {
    await this.page.getByRole("button", { name: /dismiss/i }).click({ timeout: 5000, force: true }).catch(() => {});
    await this.page.getByRole("button", { name: /me want it/i }).click({ timeout: 5000, force: true }).catch(() => {});
  }

  async adicionarProdutoAoCarrinho() {
    await this.page.goto("http://localhost:3000/#/search", {
        waitUntil: "domcontentloaded"
    });

    await this.fecharPopups();

    const addToBasketButton = this.page.locator(
        "button[aria-label='Add to Basket'], button:has-text('Add to Basket')"
    ).first();

    await addToBasketButton.waitFor({ state: "visible", timeout: 20000 });
    await addToBasketButton.scrollIntoViewIfNeeded();
    await addToBasketButton.click({ timeout: 15000, force: true });

    await this.page.waitForTimeout(1000);
    }

  async abrirCarrinho() {
    await this.page.goto("http://localhost:3000/#/basket", {
        waitUntil: "domcontentloaded"
    });

    const checkoutButton = this.page.locator(
        "#checkoutButton, button:has-text('Checkout')"
    ).first();

    await checkoutButton.waitFor({ state: "visible", timeout: 20000 });
    await checkoutButton.click({ force: true });
    }

  async preencherCampo(label: string, valor: string) {
    await this.page
      .locator("mat-form-field")
      .filter({ hasText: label })
      .locator("input, textarea")
      .first()
      .fill(valor);
  }

  async cadastrarEnderecoValido() {
    await this.page.goto("http://localhost:3000/#/address/create", {
      waitUntil: "domcontentloaded"
    });

    await this.page.getByText("Add New Address").waitFor({
      state: "visible",
      timeout: 20000
    });

    await this.preencherCampo("Country", "Brazil");
    await this.preencherCampo("Name", "Michele Johann");
    await this.preencherCampo("Mobile Number", "51999999999");
    await this.preencherCampo("ZIP Code", "92000000");
    await this.preencherCampo("Address", "Rua Teste, 123");
    await this.preencherCampo("City", "Canoas");
    await this.preencherCampo("State", "RS");

    await this.page.getByRole("button", { name: /submit/i })
      .click({ timeout: 15000, force: true });
  }

  async selecionarEndereco() {
    await this.page.goto("http://localhost:3000/#/address/select", {
      waitUntil: "domcontentloaded"
    });

    await this.page.waitForTimeout(1000);

    const radio = this.page.locator("mat-radio-button, input[type='radio']").first();

    await radio.waitFor({ state: "visible", timeout: 20000 });
    await radio.click({ force: true });

    const continueButton = this.page.locator(
      "#continueButton, button[aria-label='Proceed to payment selection'], button:has-text('Continue')"
    ).first();

    await continueButton.waitFor({ state: "visible", timeout: 20000 });
    await continueButton.click({ force: true });
  }

  async selecionarEntrega() {
    const radio = this.page.locator("mat-radio-button, input[type='radio']").first();

    await radio.waitFor({ state: "visible", timeout: 20000 });
    await radio.click({ force: true });

    const continueButton = this.page.locator(
      "#continueButton, button[aria-label='Proceed to delivery method selection'], button[aria-label='Proceed to payment selection'], button:has-text('Continue')"
    ).first();

    await continueButton.waitFor({ state: "visible", timeout: 20000 });
    await continueButton.click({ force: true });
  }

  async cadastrarPagamentoValido() {
    await this.page.getByText(/add new card/i)
      .click({ timeout: 20000, force: true })
      .catch(() => {});

    await this.page.waitForTimeout(1000);

    const visibleInputs = this.page.locator("input:not([type='radio']):visible");

    await visibleInputs.nth(0).fill("Michele Johann");
    await visibleInputs.nth(1).fill("4111111111111111");

    const visibleSelects = this.page.locator("select:visible");

    await visibleSelects.nth(0).selectOption("12");
    await visibleSelects.nth(1).selectOption("2099");

    await this.page.getByRole("button", { name: /submit/i })
      .click({ timeout: 15000, force: true })
      .catch(() => {});
  }

  async selecionarPagamento() {
    const radio = this.page.locator("mat-radio-button, input[type='radio']").first();

    await radio.waitFor({ state: "visible", timeout: 20000 });
    await radio.click({ force: true });

    const continueButton = this.page.locator(
      "#continueButton, button[aria-label='Proceed to review'], button:has-text('Continue')"
    ).first();

    await continueButton.waitFor({ state: "visible", timeout: 20000 });
    await continueButton.click({ force: true });
  }

  async finalizarPedido() {
    await this.page.waitForTimeout(2000);

    const buttons = this.page.locator("button:visible");

    const possibleOrderButton = buttons.filter({
      hasText: /place|order|pay|checkout/i
    }).last();

    await possibleOrderButton.click({
      timeout: 20000,
      force: true
    });
  }

  async finalizarCheckoutCompleto() {
    await this.abrirCarrinho();

    await this.page.waitForTimeout(1000);

    await this.cadastrarEnderecoValido();

    await this.page.waitForTimeout(1000);

    await this.selecionarEndereco();

    await this.page.waitForTimeout(1000);

    await this.selecionarEntrega();

    await this.page.waitForTimeout(1000);

    await this.cadastrarPagamentoValido();

    await this.page.waitForTimeout(1000);

    await this.selecionarPagamento();

    await this.page.waitForTimeout(1000);

    await this.finalizarPedido();
    }

  async validarConfirmacaoPedido() {
    await this.page.waitForTimeout(2000);

    await expect(this.page.locator("body")).toContainText(
      /thank you|order|confirmation|track|pedido|purchase/i,
      { timeout: 20000 }
    );
  }

  async tentarEnderecoIncompleto() {
    await this.page.goto("http://localhost:3000/#/address/create", {
      waitUntil: "domcontentloaded"
    });

    await this.page.getByText("Add New Address").waitFor({
      state: "visible",
      timeout: 20000
    });

    await this.preencherCampo("Country", "Brazil");

    await this.page.getByRole("button", { name: /submit/i })
      .click({ timeout: 15000, force: true });
  }

  async validarCamposObrigatorios() {
    await expect(
      this.page.getByRole("button", { name: /submit/i })
    ).toBeDisabled({ timeout: 10000 });
  }

}