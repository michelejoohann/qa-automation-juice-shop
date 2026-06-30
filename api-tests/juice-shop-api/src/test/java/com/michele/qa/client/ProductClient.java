package com.michele.qa.client;

import com.michele.qa.config.Endpoints;
import com.michele.qa.dto.Product;
import io.restassured.response.Response;
import com.michele.qa.config.Constants;
import com.michele.qa.config.TokenManager;

import static io.restassured.RestAssured.given;

public class ProductClient {

    public Response buscarProdutos(String termo) {
        return given()
                .queryParam("q", termo)
                .when()
                .get(Endpoints.PRODUCT_SEARCH);
    }

    public Response buscarProdutoPorId(int id) {
        return given()
                .when()
                .get(Endpoints.PRODUCTS + "/" + id);
    }

    public Response buscarProdutoInexistente() {
        return given()
            .when()
            .get(Endpoints.PRODUCTS + "/" + Constants.INVALID_PRODUCT_ID);
    }
    
    public Response criarProduto(Product produto) {
        return given()
                .body(produto)
                .when()
                .post(Endpoints.PRODUCTS);
    }

    public Response atualizarProduto(int id, Product produto) {
        return given()
                .body(produto)
                .when()
                .put(Endpoints.PRODUCTS + "/" + id);
    }

    public Response deletarProduto(int id) {
        return given()
                .when()
                .delete(Endpoints.PRODUCTS + "/" + id);
    }

    public Response metodoInvalido() {
        return given()
                .when()
                .patch(Endpoints.PRODUCTS + "/1");
    }

    public Response criarProdutoAutenticado(Product produto) {
        return given()
                .header("Authorization", "Bearer " + TokenManager.getToken())
                .body(produto)
                .when()
                .post(Endpoints.PRODUCTS);
    }
}