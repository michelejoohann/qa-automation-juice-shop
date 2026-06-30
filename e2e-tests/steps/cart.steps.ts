import { When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { CustomWorld } from "../support/world";
import { HomePage } from "../pages/HomePage";

When("adiciono o primeiro produto disponível ao carrinho", async function (this: CustomWorld) {
  const homePage = new HomePage(this.page);
  await homePage.addFirstProductToBasket();
});

Then("devo visualizar o carrinho com pelo menos um item", async function (this: CustomWorld) {
  await this.page.click("button[aria-label='Show the shopping cart']");
  const item = this.page.locator("mat-row, .mat-row").first();
  await item.waitFor({ timeout: 10000 });
  assert.equal(await item.isVisible(), true);
});
