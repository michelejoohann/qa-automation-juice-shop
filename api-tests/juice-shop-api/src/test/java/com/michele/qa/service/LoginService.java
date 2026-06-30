package com.michele.qa.service;

import com.michele.qa.client.LoginClient;
import com.michele.qa.factory.LoginFactory;

import io.restassured.response.Response;

public class LoginService {

    private final LoginClient loginClient = new LoginClient();

    public Response realizarLoginValido() {
        return loginClient.login(LoginFactory.usuarioValido());
    }

    public Response realizarLoginInvalido() {
        return loginClient.login(LoginFactory.usuarioInvalido());
    }

    public Response realizarLoginComSenhaEmBranco() {
        return loginClient.login(LoginFactory.senhaEmBranco());
    }
}