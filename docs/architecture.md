# Architecture

Este projeto foi desenvolvido utilizando uma arquitetura modular para separar responsabilidades e facilitar a manutenção, escalabilidade e reutilização do framework de automação.

Cada módulo possui uma responsabilidade específica e pode ser executado de forma independente ou integrado através do GitHub Actions.

---

# Visão Geral

```text
qa-automation-juice-shop
│
├── api-tests
│     └── juice-shop-api
│
├── e2e-tests
│
├── performance-tests
│     └── k6
│
├── docs
│
├── evidences
│
└── .github/workflows
```

---

# Arquitetura Geral

```text
                           GitHub Actions
                                  │
        ┌─────────────────────────┼──────────────────────────┐
        │                         │                          │
        ▼                         ▼                          ▼

   API Tests                E2E Tests              Performance Tests

 RestAssured             Playwright+Cucumber             k6

        │                         │                          │
        └─────────────────────────┴──────────────────────────┘
                                  │
                                  ▼
                         OWASP Juice Shop
```

---

# Arquitetura dos Testes de API

Os testes de API seguem uma arquitetura em camadas para reduzir acoplamento.

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

### Responsabilidades

| Camada | Responsabilidade |
|---------|------------------|
| Test | Cenários de teste |
| Service | Regras de negócio |
| Client | Comunicação HTTP |
| RequestSpecs | Configuração das requisições |
| DTO | Objetos utilizados nas requisições |
| Factory | Massa de dados |
| Utils | Utilitários do framework |

---

# Arquitetura dos Testes E2E

Os testes E2E utilizam o padrão Page Object Model (POM).

```text
Feature
 │
 ▼
Steps
 │
 ▼
Page Object
 │
 ▼
Playwright
 │
 ▼
Browser
 │
 ▼
OWASP Juice Shop
```

### Componentes

- Features em Gherkin
- Step Definitions
- Page Objects
- Hooks
- Reports

---

# Arquitetura dos Testes de Performance

Os testes de performance utilizam o Grafana k6.

```text
Smoke Test
        │
        ▼
 Load Test
        │
        ▼
 Juice Shop API
```

São avaliados:

- Tempo de resposta
- Taxa de erro
- Percentil 95 (P95)
- Throughput
- Disponibilidade

---

# Integração Contínua

O pipeline do GitHub Actions executa automaticamente os módulos.

```text
Push

 │

 ▼

API Tests

 │

 ▼

E2E Tests

 │

 ▼

Performance Tests

 │

 ▼

Quality Gate

 │

 ▼

Success / Failure
```

---

# Tecnologias

| Camada | Tecnologia |
|---------|------------|
| Linguagem API | Java 17 |
| Testes API | RestAssured |
| Test Runner | JUnit 5 |
| Linguagem E2E | TypeScript |
| Automação Web | Playwright |
| BDD | Cucumber |
| Performance | Grafana k6 |
| Build | Maven |
| CI/CD | GitHub Actions |
| Relatórios | Allure Report e Cucumber Report |

---

# Princípios adotados

Este framework foi construído seguindo alguns princípios de engenharia de software:

- Separação de responsabilidades
- Reutilização de código
- Baixo acoplamento
- Alta coesão
- Organização por módulos
- Configuração centralizada
- Facilidade de manutenção
- Escalabilidade para novos cenários de teste

---

# Evolução do Framework

Roadmap previsto para próximas versões:

- Docker Compose
- SonarQube
- Dashboard Allure
- Testes Mobile (Appium)
- Testes de Segurança
- Integração com Azure DevOps
- Execução Paralela
- Publicação automática de relatórios