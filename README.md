# 🚀 QA Automation Framework - OWASP Juice Shop

<p align="center">

![Java](https://img.shields.io/badge/Java-17-red?style=for-the-badge&logo=openjdk)
![Maven](https://img.shields.io/badge/Maven-3.9-blue?style=for-the-badge&logo=apachemaven)
![JUnit5](https://img.shields.io/badge/JUnit-5-success?style=for-the-badge&logo=junit5)
![RestAssured](https://img.shields.io/badge/RestAssured-API_Testing-success?style=for-the-badge)
![Playwright](https://img.shields.io/badge/Playwright-E2E-green?style=for-the-badge&logo=playwright)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-brightgreen?style=for-the-badge&logo=cucumber)
![k6](https://img.shields.io/badge/k6-Performance-purple?style=for-the-badge)
![Allure](https://img.shields.io/badge/Allure-Report-orange?style=for-the-badge)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI-blue?style=for-the-badge&logo=githubactions)

</p>

---

# 📖 Sobre o Projeto

Framework completo de automação de testes desenvolvido para a aplicação **OWASP Juice Shop**, contemplando testes de API, testes End-to-End (E2E), testes de Performance e integração contínua (CI/CD).

O projeto foi desenvolvido seguindo boas práticas de arquitetura, organização e qualidade de código, simulando um ambiente de produção.

---

# 🎯 Objetivos

Este projeto demonstra conhecimentos em:

- Automação de Testes de API
- Automação End-to-End
- Testes de Performance
- Arquitetura de Frameworks
- Clean Code
- CI/CD
- Relatórios Automatizados

---

# 🛠 Tecnologias

| Tecnologia | Utilização |
|------------|------------|
| Java 17 | API Tests |
| Maven | Build |
| JUnit 5 | Test Runner |
| RestAssured | API Testing |
| Playwright | E2E |
| Cucumber | BDD |
| TypeScript | E2E |
| k6 | Performance |
| Allure Report | Reports |
| JSON Schema Validator | Contract Testing |
| DataFaker | Test Data |
| GitHub Actions | CI/CD |
| Docker | Ambiente |

---

# 🏗 Arquitetura

```text
                           QA Automation Framework

                                      │

          ┌───────────────────────────┼───────────────────────────┐
          │                           │                           │

     API Tests                   E2E Tests                 Performance

 RestAssured + JUnit         Playwright + Cucumber             k6

          │                           │                           │

     Service Layer            Page Objects                 Scripts

          │                           │                           │

      Client Layer              Step Definitions           Thresholds

          │                           │

 Request Specifications          Hooks / World

          │

        REST API
```

---

# 📂 Estrutura do Projeto

```text
qa-automation-juice-shop

│

├── .github
│   └── workflows
│       ├── api-tests.yml
│       ├── e2e-tests.yml
│       ├── performance-tests.yml
│       └── quality-gate.yml
│
├── api-tests
│   └── juice-shop-api
│
├── e2e-tests
│
├── performance-tests
│   └── k6
│
├── docs
│
├── evidences
│   ├── api
│   ├── ci
│   ├── e2e
│   └── performance
│
├── README.md
└── .gitignore
```

---

# ✅ Funcionalidades Implementadas

## API

- Login
- Produtos
- CRUD Produtos
- GET
- POST
- PUT
- DELETE
- Testes Positivos
- Testes Negativos
- JSON Schema Validation

---

## End-to-End

- Login válido
- Login inválido
- Adicionar produto ao carrinho
- Checkout completo
- Checkout negativo (endereço incompleto)
- Page Object Model
- Cucumber (BDD)

---

## Performance

- Smoke Test
- Load Test
- Stress Test (500 usuários por 5 minutos)

---

## CI/CD

- API Tests
- E2E Tests
- Performance Tests
- Quality Gate

---

# 📋 Cobertura

| Módulo | Status |
|---------|--------|
| API | ✅ |
| E2E | ✅ |
| Performance | ✅ |
| CI/CD | ✅ |
| Reports | ✅ |

---

# ⚙️ Como Executar

## 1. Clonar

```bash
git clone https://github.com/michelejoohann/qa-automation-juice-shop.git
```

---

## 2. Subir a aplicação

```bash
docker run --rm -p 3000:3000 bkimminich/juice-shop
```

---

# API Tests

```bash
cd api-tests/juice-shop-api

mvn clean test
```

### Gerar Allure

```bash
allure serve target/allure-results
```

---

# E2E Tests

```bash
cd e2e-tests

npm install

npm run test:e2e
```

### Abrir relatório

```text
e2e-tests/reports/cucumber-report.html
```

---

# Performance Tests

Smoke Test

```bash
docker run --rm -i -v ${PWD}/performance-tests/k6:/scripts grafana/k6 run --env BASE_URL=http://host.docker.internal:3000 /scripts/scripts/smoke-test.js
```

---

Load Test

```bash
docker run --rm -i -v ${PWD}/performance-tests/k6:/scripts grafana/k6 run --env BASE_URL=http://host.docker.internal:3000 /scripts/scripts/load-test.js
```

---

Stress Test (500 usuários)

```bash
docker run --rm -i -v ${PWD}/performance-tests/k6:/scripts grafana/k6 run --env BASE_URL=http://host.docker.internal:3000 /scripts/scripts/stress-test-500vus.js
```

---

# 📊 Relatórios

## API

Allure Report

![Allure Report](evidences/api/allure-report.png)

---

## End-to-End

Cucumber Report

![Cucumber Report](evidences/e2e/cucumber-report.png)

---

## Performance

k6

![k6 Results](evidences/performance/k6-results.png)

---

## CI/CD

GitHub Actions

![GitHub Actions](evidences/ci/github-actions.png)

---

# 🔄 Integração Contínua

O projeto possui pipeline automatizado utilizando GitHub Actions.

Após cada **push** ou **pull request** são executados automaticamente:

- API Tests
- E2E Tests
- Performance Tests
- Quality Gate

---

# 📚 Documentação

A documentação complementar encontra-se na pasta **docs**:

- Architecture
- Test Plan

---

# 👩‍💻 Autora

## Michèlé Joohann

QA Engineer | Software Quality | Test Automation

Especialista em:

- Testes Automatizados
- APIs REST
- Automação E2E
- Performance Tests
- Qualidade de Software

GitHub:

https://github.com/michelejoohann

---

# ⭐ Considerações

Este projeto foi desenvolvido como avaliação técnica, simulando um ambiente real de desenvolvimento, utilizando boas práticas de engenharia de software, automação de testes e integração contínua.