package com.michele.qa.factory;

import com.michele.qa.dto.LoginRequest;

public class LoginFactory {

    private LoginFactory() {
    }

    public static LoginRequest usuarioValido() {
        return new LoginRequest("admin@juice-sh.op", "admin123");
    }

    public static LoginRequest usuarioInvalido() {
        return new LoginRequest("usuario.inexistente@teste.com", "senhaerrada");
    }

    public static LoginRequest senhaEmBranco() {
        return new LoginRequest("admin@juice-sh.op", "");
    }
}