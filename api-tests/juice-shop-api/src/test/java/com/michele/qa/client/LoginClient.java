package com.michele.qa.client;

import com.michele.qa.dto.LoginRequest;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class LoginClient {

    private static final String LOGIN_ENDPOINT = "/rest/user/login";

    public Response login(LoginRequest loginRequest) {
        return given()
                .body(loginRequest)
                .when()
                .post(LOGIN_ENDPOINT);
    }
}