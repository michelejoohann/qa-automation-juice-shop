import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/LoginPage";
import { CustomWorld } from "../support/world";

let loginPage: LoginPage;

Given("que estou na tela inicial do Juice Shop", async function (this: CustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.acessarAplicacao();
  await loginPage.fecharDialogosIniciais();
});

When("acesso a tela de login", async function () {
  await loginPage.abrirLogin();
});

When("informo o email {string} e a senha {string}", async function (email: string, senha: string) {
  await loginPage.preencherLogin(email, senha);
});

When("clico no botão de login", async function () {
  await loginPage.clicarEmLogin();
});

Then("devo visualizar o usuário logado", async function () {
  await loginPage.validarLoginComSucesso();
});

Then("devo visualizar mensagem de erro de login", async function () {
  await loginPage.validarErroDeLogin();
});