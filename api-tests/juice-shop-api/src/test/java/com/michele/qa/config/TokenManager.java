package com.michele.qa.config;

import com.michele.qa.factory.LoginFactory;

import static io.restassured.RestAssured.given;

public final class TokenManager {

    private static String token;

    private TokenManager() {
    }

    public static String getToken() {
        if (token == null || token.isBlank()) {
            token = gerarToken();
        }

        return token;
    }

    private static String gerarToken() {
        return given()
                .body(LoginFactory.usuarioValido())
                .when()
                .post(Endpoints.LOGIN)
                .then()
                .statusCode(200)
                .extract()
                .path("authentication.token");
    }

    public static void limparToken() {
        token = null;
    }
}