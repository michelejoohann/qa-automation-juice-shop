Feature: Login

  Scenario: Login com usuário válido
    Given que estou na tela inicial do Juice Shop
    When acesso a tela de login
    And informo o email "admin@juice-sh.op" e a senha "admin123"
    And clico no botão de login
    Then devo visualizar o usuário logado

  Scenario: Login com senha inválida
    Given que estou na tela inicial do Juice Shop
    When acesso a tela de login
    And informo o email "admin@juice-sh.op" e a senha "senhaerrada"
    And clico no botão de login
    Then devo visualizar mensagem de erro de login