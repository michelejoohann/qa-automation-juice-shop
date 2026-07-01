# Plano de Testes

## Objetivo

Este documento descreve a estratégia de testes adotada para o framework de automação da aplicação **OWASP Juice Shop**, contemplando testes de API, End-to-End (E2E), Performance e Integração Contínua.

O objetivo é garantir a qualidade funcional da aplicação, validar regras de negócio, contratos da API e assegurar que os principais fluxos sejam executados automaticamente.

---

# Escopo

O projeto contempla os seguintes tipos de testes:

- Testes Automatizados de API
- Testes End-to-End (E2E)
- Testes de Performance
- Execução Automatizada em CI/CD

---

# Estratégia de Testes

## API

Ferramentas:

- RestAssured
- JUnit 5
- JSON Schema Validation

Validações realizadas:

- Status Code
- Headers
- Body
- JSON Schema
- Autenticação
- Payload
- Métodos HTTP
- Tratamento de erros

---

## End-to-End

Ferramentas:

- Playwright
- Cucumber
- TypeScript

Fluxos automatizados:

- Login válido
- Login inválido
- Adição de produto ao carrinho
- Checkout completo
- Checkout com endereço inválido

---

## Performance

Ferramenta:

- Grafana k6

Cenários:

- Smoke Test
- Load Test
- Stress Test (500 usuários virtuais durante 5 minutos)

Métricas monitoradas:

- Tempo médio
- P95
- Throughput
- Taxa de erro
- Disponibilidade

---

# Cobertura

## API

| Endpoint | Método | Positivo | Negativo |
|----------|--------|:--------:|:--------:|
| Login | POST | ✅ | ✅ |
| Products | GET | ✅ | ✅ |
| Products | POST | ✅ | ✅ |
| Products | PUT | ✅ | ✅ |
| Products | DELETE | ✅ | ✅ |

---

## E2E

| Cenário | Positivo | Negativo |
|----------|:--------:|:--------:|
| Login | ✅ | ✅ |
| Carrinho | ✅ | — |
| Checkout | ✅ | ✅ |

---

## Performance

| Cenário | Status |
|----------|--------|
| Smoke Test | ✅ |
| Load Test | ✅ |
| Stress Test | ✅ |

---

# Critérios de Entrada

Antes da execução dos testes é necessário:

- Docker instalado
- OWASP Juice Shop em execução
- Dependências instaladas
- Ambiente configurado

---

# Critérios de Saída

Os testes são considerados aprovados quando:

- Todos os cenários executam sem falhas inesperadas
- Relatórios são gerados corretamente
- Thresholds de performance são atendidos
- Pipeline do GitHub Actions finaliza com sucesso

---

# Relatórios

São gerados automaticamente:

- Allure Report (API)
- Cucumber Report (E2E)
- Resultados do k6
- GitHub Actions

---

# Integração Contínua

Após cada **push** ou **pull request** são executados automaticamente:

- API Tests
- End-to-End Tests
- Performance Tests
- Quality Gate

---

# Riscos Conhecidos

- Mudanças na interface do OWASP Juice Shop podem exigir atualização dos seletores dos testes E2E.
- Alterações nos contratos da API podem exigir atualização dos testes de API.
- Os testes de performance dependem da disponibilidade do ambiente local ou do ambiente configurado para execução.