# API Tests - OWASP Juice Shop

Este módulo contém o framework de automação de testes de API desenvolvido para a aplicação **OWASP Juice Shop**, utilizando Java e RestAssured.

O objetivo é validar os principais serviços REST da aplicação, garantindo o correto funcionamento das APIs, contratos, autenticação e regras de negócio.

---

# Tecnologias

- Java 17
- Maven
- JUnit 5
- RestAssured
- Allure Report
- JSON Schema Validation
- DataFaker
- GitHub Actions

---

# Estrutura

```text
juice-shop-api
│
├── src
│   ├── main
│   │
│   └── test
│       ├── java
│       │   └── com.michele.qa
│       │       ├── api
│       │       ├── base
│       │       ├── client
│       │       ├── config
│       │       ├── dto
│       │       ├── factory
│       │       ├── service
│       │       ├── specs
│       │       └── utils
│       │
│       └── resources
│           ├── environments
│           ├── fixtures
│           └── schemas
│
└── pom.xml
```

---

# Arquitetura

O framework foi desenvolvido seguindo uma arquitetura em camadas.

```text
                Test

                 │

                 ▼

              Service

                 │

                 ▼

              Client

                 │

                 ▼

          RequestSpecs

                 │

                 ▼

            REST API
```

---

# Responsabilidades

## api

Contém os cenários de teste.

Exemplo:

- LoginTest
- ProductTest
- ProductManagementTest

---

## service

Implementa as regras de negócio utilizadas pelos testes.

Exemplo:

- LoginService
- ProductService

---

## client

Responsável pela comunicação HTTP com a API.

Exemplo:

- LoginClient
- ProductClient

---

## config

Centraliza todas as configurações do framework.

Contém:

- Endpoints
- Headers
- Constants
- TokenManager

---

## dto

Objetos utilizados nas requisições e respostas.

Exemplo:

- Product
- LoginRequest
- LoginResponse

---

## factory

Responsável pela geração da massa de dados.

Exemplo:

- ProductFactory
- LoginFactory

---

## specs

Centraliza a configuração das requisições RestAssured.

---

## utils

Classes utilitárias utilizadas pelo framework.

---

# Funcionalidades

Atualmente o framework possui cenários para:

- Login
- Busca de Produtos
- Criação de Produtos
- Atualização de Produtos
- Exclusão de Produtos

Incluindo validações de:

- Status Code
- Headers
- Payload
- JSON Schema
- Autenticação
- Tratamento de erros

---

# Ambientes

Os ambientes são configurados através dos arquivos:

```text
src/test/resources/environments
```

Exemplo:

```text
dev.properties

qa.properties

hml.properties
```

---

# Executando os testes

Todos os testes

```bash
mvn clean test
```

Ambiente DEV

```bash
mvn clean test -Denv=dev
```

Ambiente QA

```bash
mvn clean test -Denv=qa
```

Ambiente HML

```bash
mvn clean test -Denv=hml
```

---

# Relatório Allure

Gerar relatório

```bash
allure generate target/allure-results
```

Abrir relatório

```bash
allure serve target/allure-results
```

---

# Integração Contínua

Os testes são executados automaticamente através do GitHub Actions.

Workflow:

```text
.github/workflows/api-tests.yml
```

---

# Boas práticas adotadas

- Arquitetura em camadas
- Reutilização de código
- Configuração centralizada
- Separação entre regras de negócio e comunicação HTTP
- Massa de dados reutilizável
- JSON Schema Validation
- Geração automática de relatórios
- Execução em CI/CD

---

# Próximas evoluções

- Testes de Basket
- Testes de Checkout
- Testes de Cupons
- Dados dinâmicos utilizando Faker
- Execução paralela
- Dashboard Allure
- Integração com SonarQube