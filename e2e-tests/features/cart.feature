Feature: Carrinho no OWASP Juice Shop

  Scenario: Adicionar produto ao carrinho
    Given que estou na página inicial do Juice Shop
    When adiciono o primeiro produto disponível ao carrinho
    Then devo visualizar o carrinho com pelo menos um item
