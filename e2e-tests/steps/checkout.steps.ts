import { Given, When, Then } from "@cucumber/cucumber";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CustomWorld } from "../support/world";

let checkoutPage: CheckoutPage;

Given("que estou logada no Juice Shop", async function (this: CustomWorld) {
  checkoutPage = new CheckoutPage(this.page);

  const response = await this.context.request.post(
    "http://localhost:3000/rest/user/login",
    {
      data: {
        email: "admin@juice-sh.op",
        password: "admin123"
      }
    }
  );

  const body = await response.json();

  const token = body.authentication.token;
  const bid = body.authentication.bid;
  const email = body.authentication.umail;

  await this.context.addInitScript(
    ({ token, bid, email }) => {
      localStorage.setItem("token", token);
      localStorage.setItem("bid", String(bid));
      localStorage.setItem("email", email);
    },
    { token, bid, email }
  );

  await this.page.goto("http://localhost:3000/#/search", {
    waitUntil: "domcontentloaded"
  });

  await checkoutPage.fecharPopups();
});

When("adiciono um produto ao carrinho para checkout", async function () {
  await checkoutPage.adicionarProdutoAoCarrinho();
});

When("finalizo o checkout com endereço e pagamento válidos", async function () {
  await checkoutPage.finalizarCheckoutCompleto();
});

Then("devo visualizar a confirmação do pedido", async function () {
  await checkoutPage.validarConfirmacaoPedido();
});

When("tento cadastrar endereço com campos obrigatórios ausentes", async function () {
  await checkoutPage.tentarEnderecoIncompleto();
});

Then("devo visualizar validação de campos obrigatórios no checkout", async function () {
  await checkoutPage.validarCamposObrigatorios();
});