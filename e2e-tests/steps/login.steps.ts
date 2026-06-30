import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { CustomWorld } from "../support/world";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

Given("que estou na página inicial do Juice Shop", async function (this: CustomWorld) {
  const homePage = new HomePage(this.page);
  await homePage.open(this.baseUrl);
});

When("tento realizar login com email {string} e senha {string}", async function (this: CustomWorld, email: string, senha: string) {
  const homePage = new HomePage(this.page);
  const loginPage = new LoginPage(this.page);

  await homePage.goToLogin();
  await loginPage.login(email, senha);
});

Then("devo visualizar uma mensagem de erro no login", async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  assert.equal(await loginPage.isErrorVisible(), true);
});
