package com.michele.qa.api;

import com.michele.qa.base.BaseTest;
import com.michele.qa.service.ProductService;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import io.qameta.allure.*;
import com.michele.qa.config.Constants;

import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

import static org.hamcrest.Matchers.*;

@Epic("API")
@Feature("Produto")
@Owner("Michele Johann")

public class ProductTest extends BaseTest {

    private final ProductService productService = new ProductService();

    @Test
    @Story("Busca produto")
    @Severity(SeverityLevel.NORMAL)
    @Description("Busca produto por termo e retorna produto válido.")
    @DisplayName("Deve buscar produtos por termo")
    void deveBuscarProdutosPorTermo() {
        productService.buscarProdutosPorTermo("apple")
                .then()
                .statusCode(200)
                .header("content-type", containsString("application/json"))
                .body("data", not(empty()))
                .body(matchesJsonSchemaInClasspath("schemas/product/product-list.json"));
    }

    @Test
    @Story("Busca produto")
    @Severity(SeverityLevel.NORMAL)
    @Description("Busca produto por ID e retorna produto válido.")
    @DisplayName("Deve buscar produto por ID")
    void deveBuscarProdutoPorId() {
        productService.buscarProdutoPorId(Constants.PRODUCT_ID)
                .then()
                .statusCode(200)
                .header("content-type", containsString("application/json"))
                .body("data.id", equalTo(Constants.PRODUCT_ID))
                .body("data.name", notNullValue());
    }

    @Test
    @Story("Busca produto inexistente")
    @Severity(SeverityLevel.NORMAL)
    @Description("Busca produto inexistente e retorna erro.")
    @DisplayName("Deve retornar erro ao buscar produto inexistente")
    void deveRetornarErroAoBuscarProdutoInexistente() {
        productService.buscarProdutoInexistente()
                .then()
                .statusCode(anyOf(is(404), is(500)))
                .body(anything());
    }

}