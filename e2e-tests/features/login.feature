Feature: Login no OWASP Juice Shop

  Scenario: Login com usuário inválido
    Given que estou na página inicial do Juice Shop
    When tento realizar login com email "usuario.inexistente@teste.com" e senha "senhaerrada"
    Then devo visualizar uma mensagem de erro no login
