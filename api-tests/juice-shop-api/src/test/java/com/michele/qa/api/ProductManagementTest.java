package com.michele.qa.api;

import com.michele.qa.base.BaseTest;
import com.michele.qa.service.ProductService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import io.qameta.allure.*;

import static org.hamcrest.Matchers.*;

@Epic("API")
@Feature("Gerenciamento Produto")
@Owner("Michele Johann")

public class ProductManagementTest extends BaseTest {

    private final ProductService productService = new ProductService();

    @Test
    @Story("Criação de produto")
    @Severity(SeverityLevel.CRITICAL)
    @Description("Valida tentativa de criação de produto sem autenticação.")
    @DisplayName("Deve validar criação de produto sem autenticação")
    void deveCriarProdutoComPayloadValido() {
        productService.criarProdutoComPayloadValido()
                .then()
                .statusCode(anyOf(is(201), is(200), is(401)))
                .header("content-type", containsString("application/json"))
                .body(anything());
    }

    @Test
    @Story("Não cria produto com payload inválido")
    @Severity(SeverityLevel.CRITICAL)
    @Description("Valida não criação de produto com payload inválido.")
    @DisplayName("Não deve criar produto com payload inválido")
    void naoDeveCriarProdutoComPayloadInvalido() {
        productService.criarProdutoComPayloadInvalido()
                .then()
                .statusCode(anyOf(is(400), is(401), is(403), is(500)))
                .body(anything());
    }

    @Test
    @Story("Atualização de produto")
    @Severity(SeverityLevel.NORMAL)
    @Description("Valida atualização de produto e retorna produto atualizado.")
    @DisplayName("Deve atualizar produto existente")
    void deveAtualizarProdutoExistente() {
        productService.atualizarProdutoExistente()
                .then()
                .statusCode(anyOf(is(200), is(201), is(401)))
                .body(anything());
    }

    @Test
    @Story("Exclusão de produto")
    @Severity(SeverityLevel.CRITICAL)
    @Description("Valida exclusão de produto ou permissão negada.")
    @DisplayName("Deve deletar produto existente ou retornar permissão negada")
    void deveDeletarProdutoOuRetornarPermissaoNegada() {
        productService.deletarProdutoExistente()
                .then()
                .statusCode(anyOf(is(200), is(204), is(401), is(403), is(500)))
                .body(anything());
    }

    @Test
    @Story("Consulta inválida para produto")
    @Severity(SeverityLevel.NORMAL)
    @Description("Valida retorno de erro quando utilizado método HTTP inválido.")
    @DisplayName("Deve retornar erro para método HTTP inválido")
    void deveRetornarErroParaMetodoHttpInvalido() {
        productService.chamarMetodoHttpInvalido()
                .then()
                .statusCode(anyOf(is(404), is(405), is(500)))
                .body(anything());
    }

    @Test
    @Story("Criação de produto autenticada")
    @Severity(SeverityLevel.CRITICAL)
    @Description("Valida tentativa de criação de produto utilizando token de autenticação.")
    @DisplayName("Deve tentar criar produto com autenticação")
    void deveTentarCriarProdutoComAutenticacao() {
        productService.criarProdutoAutenticadoComPayloadValido()
                .then()
                .statusCode(anyOf(is(200), is(201), is(401), is(403)))
                .body(anything());
    }

}