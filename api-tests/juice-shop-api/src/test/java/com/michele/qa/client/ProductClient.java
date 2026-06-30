package com.michele.qa.client;

import io.restassured.response.Response;

import com.michele.qa.dto.Product;

import static io.restassured.RestAssured.given;

public class ProductClient {

    public Response buscarProdutos(String termo) {
        return given()
                .queryParam("q", termo)
                .when()
                .get("/rest/products/search");
    }

    public Response buscarProdutoPorId(int id) {
        return given()
                .when()
                .get("/api/Products/" + id);
    }

    public Response buscarProdutoInexistente() {
        return given()
                .when()
                .get("/api/Products/999999");
    }

    public Response criarProduto(Product produto) {
        return given()
                .body(produto)
                .when()
                .post("/api/Products");
    }

    public Response atualizarProduto(int id, Product produto) {
        return given()
                .body(produto)
                .when()
                .put("/api/Products/" + id);
    }

    public Response deletarProduto(int id) {
        return given()
                .when()
                .delete("/api/Products/" + id);
    }

    public Response metodoInvalido() {
        return given()
                .when()
                .patch("/api/Products/1");
    }
}