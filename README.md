# QA Automation Juice Shop

Projeto-base para avaliação técnica de Automação de Testes usando OWASP Juice Shop.

## Objetivo

Automatizar testes de API, E2E, carga e pipeline CI/CD simulando uma entrega de qualidade para ambiente produtivo.

## Aplicação alvo

OWASP Juice Shop

```bash
docker run --rm -p 3000:3000 bkimminich/juice-shop
```

Acesse:

```text
http://localhost:3000
```

## Tecnologias utilizadas

- Java 17
- Maven
- RestAssured
- JUnit 5
- Node.js
- Playwright
- Cucumber
- K6
- GitHub Actions

## Estrutura do projeto

```text
qa-automation-juice-shop/
├── api-tests/              # Testes automatizados de API com RestAssured
├── e2e-tests/              # Testes E2E com Playwright + Cucumber
├── performance-tests/      # Testes de carga com K6
├── reports/                # Relatórios gerados
├── evidences/              # Evidências, prints e artefatos
├── docs/                   # Documentação complementar
└── .github/workflows/      # Pipeline CI/CD
```

## Como executar os testes de API

Com o Juice Shop rodando em `http://localhost:3000`:

```bash
cd api-tests
mvn test
```

## Como executar os testes E2E

```bash
cd e2e-tests
npm install
npx playwright install
npm test
```

O relatório HTML será gerado em:

```text
reports/e2e-report.html
```

## Como executar teste de carga

```bash
k6 run performance-tests/k6-load-test.js
```

## CI/CD

O projeto possui pipeline GitHub Actions em:

```text
.github/workflows/ci.yml
```

O pipeline executa os testes de API automaticamente a cada push ou pull request.

## Evidências

- Resultados Maven/JUnit ficam em `api-tests/target/surefire-reports`.
- Relatório Cucumber fica em `reports/e2e-report.html`.
- Resultados do K6 aparecem no console e podem ser exportados conforme necessidade.
