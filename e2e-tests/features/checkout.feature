Feature: Checkout

  Scenario: Finalizar compra com dados válidos
    Given que estou logada no Juice Shop
    When adiciono um produto ao carrinho para checkout
    And finalizo o checkout com endereço e pagamento válidos
    Then devo visualizar a confirmação do pedido

  Scenario: Não deve finalizar checkout com endereço incompleto
    Given que estou logada no Juice Shop
    When adiciono um produto ao carrinho para checkout
    And tento cadastrar endereço com campos obrigatórios ausentes
    Then devo visualizar validação de campos obrigatórios no checkout