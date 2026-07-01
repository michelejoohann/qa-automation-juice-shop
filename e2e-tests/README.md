# End-to-End Tests - OWASP Juice Shop

Este módulo contém a automação de testes End-to-End (E2E) da aplicação **OWASP Juice Shop**, utilizando **Playwright**, **Cucumber** e **TypeScript**.

O objetivo é validar os principais fluxos do usuário simulando sua interação com a aplicação em um navegador real.

---

# Tecnologias

- Playwright
- Cucumber
- TypeScript
- Node.js
- GitHub Actions

---

# Versões

| Ferramenta | Versão |
|------------|---------|
| Node.js | 24.x |
| Playwright | 1.x |
| Cucumber | 11.x |
| TypeScript | 5.x |

---

# Estrutura

```text
e2e-tests

├── features
│   ├── login.feature
│   ├── cart.feature
│   └── checkout.feature
│
├── pages
│   ├── LoginPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── steps
│
├── support
│
├── reports
│
└── README.md
```

---

# Arquitetura

```text
Feature (BDD)

        │

        ▼

Step Definitions

        │

        ▼

Page Objects

        │

        ▼

Playwright

        │

        ▼

Browser
```

---

# Cenários Automatizados

## Login

- Login válido
- Login inválido

---

## Carrinho

- Adicionar produto ao carrinho

---

## Checkout

- Compra completa
- Endereço inválido

---

# Cobertura

| Cenário | Positivo | Negativo |
|----------|:--------:|:--------:|
| Login | ✅ | ✅ |
| Carrinho | ✅ | — |
| Checkout | ✅ | ✅ |

---

# Executando

Instalar dependências

```bash
npm install
```

Executar

```bash
npm run test:e2e
```

---

# Relatório

Após a execução:

```text
reports/cucumber-report.html
```

---

# Evidências

Os screenshots das falhas são armazenados automaticamente em:

```text
reports/screenshots
```

---

# Integração Contínua

Workflow:

```text
.github/workflows/e2e-tests.yml
```

---

# Boas práticas adotadas

- BDD
- Page Object Model
- Reutilização de componentes
- Separação entre Features e Steps
- Screenshots automáticos
- Execução automatizada em CI/CD