package com.michele.qa.api;

import com.michele.qa.base.BaseTest;
import com.michele.qa.service.LoginService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import io.qameta.allure.*;

import static org.hamcrest.Matchers.*;

@Epic("API")
@Feature("Login")
@Owner("Michele Johann")

public class LoginTest extends BaseTest {

    private final LoginService loginService = new LoginService();

    @Test
    @Story("Login com credenciais válidas")
    @Severity(SeverityLevel.CRITICAL)
    @Description("Valida login com usuário válido e retorno do token de autenticação.")
    @DisplayName("Deve realizar login com usuário válido")
    void deveRealizarLoginComUsuarioValido() {
        loginService.realizarLoginValido()
                .then()
                .statusCode(200)
                .header("content-type", containsString("application/json"))
                .body("authentication.token", notNullValue())
                .body("authentication.umail", equalTo("admin@juice-sh.op"));
    }

    @Test
    @Story("Login com credenciais inválidas")
    @Severity(SeverityLevel.CRITICAL)
    @Description("Valida login com usuário inválido e retorno falha de autenticação.")
    @DisplayName("Não deve realizar login com usuário inválido")
    void naoDeveRealizarLoginComUsuarioInvalido() {
        loginService.realizarLoginInvalido()
                .then()
                .statusCode(anyOf(is(401), is(403)))
                .body("error", notNullValue());
    }

    @Test
    @Story("Login com senha em branco")
    @Severity(SeverityLevel.NORMAL)
    @Description("Valida que o login não é realizado quando a senha é enviada em branco.")
    @DisplayName("Não deve realizar login com senha em branco")
    void naoDeveRealizarLoginComSenhaEmBranco() {
        loginService.realizarLoginComSenhaEmBranco()
                .then()
                .statusCode(anyOf(is(400), is(401), is(403)))
                .body(anything());
    }
}