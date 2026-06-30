package com.michele.qa.client;

import com.michele.qa.config.Endpoints;
import com.michele.qa.dto.LoginRequest;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class LoginClient {

    public Response login(LoginRequest request) {
        return given()
                .body(request)
                .when()
                .post(Endpoints.LOGIN);
    }
}