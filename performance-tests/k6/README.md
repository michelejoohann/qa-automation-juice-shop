# Performance Tests - k6

Este módulo contém os testes de performance da aplicação **OWASP Juice Shop** utilizando **Grafana k6**.

O objetivo é validar o comportamento da API sob diferentes níveis de carga, monitorando tempo de resposta, taxa de erros e estabilidade.

---

# Estrutura

```text
performance-tests
└── k6
    ├── scripts
    │   ├── smoke-test.js
    │   └── load-test.js
    └── README.md
```

---

# Cenários

## Smoke Test

Valida se a API está disponível e responde corretamente.

Configuração:

- 1 Usuário Virtual (VU)
- duração de 30 segundos

Valida:

- HTTP 200
- conteúdo da resposta
- disponibilidade da API

---

## Load Test

Simula crescimento gradual de usuários.

Configuração:

- 5 usuários
- aumento para 10 usuários
- redução para 0 usuários

Valida:

- estabilidade
- tempo de resposta
- taxa de erro

---

## Stress Test

Configuração:

- 500 usuários virtuais
- duração de 5 minutos

Objetivo:

- validar estabilidade
- identificar gargalos
- medir throughput

Thresholds

| Métrica | Valor |
|----------|--------|
| Taxa de erro | < 5% |
| P95 | < 2000 ms |

---

# Endpoint testado

```http
GET /rest/products/search?q=apple
```

---

# Thresholds

## Smoke Test

| Métrica | Valor |
|----------|--------|
| Taxa de erro | < 1% |
| P95 | < 1000 ms |

## Load Test

| Métrica | Valor |
|----------|--------|
| Taxa de erro | < 5% |
| P95 | < 1500 ms |

---

# Pré-requisitos

- Docker Desktop
- Grafana k6 (opcional para execução nativa)

---

# Executando o Juice Shop

```bash
docker run --rm -p 3000:3000 bkimminich/juice-shop
```

---

# Executando via Docker

Smoke Test

```bash
docker run --rm -i -v ${PWD}/performance-tests/k6:/scripts grafana/k6 run --env BASE_URL=http://host.docker.internal:3000 /scripts/scripts/smoke-test.js
```

Load Test

```bash
docker run --rm -i -v ${PWD}/performance-tests/k6:/scripts grafana/k6 run --env BASE_URL=http://host.docker.internal:3000 /scripts/scripts/load-test.js
```

Stress Test

```bash
docker run --rm -i -v ${PWD}/performance-tests/k6:/scripts grafana/k6 run --env BASE_URL=http://host.docker.internal:3000 /scripts/scripts/stress-test-500vus.js
```

---

# Executando localmente (k6 instalado)

Smoke

```bash
k6 run scripts/smoke-test.js
```

Load

```bash
k6 run scripts/load-test.js
```

---

# Métricas avaliadas

- Requisições por segundo (RPS)
- Tempo médio de resposta
- Percentil 95 (P95)
- Tempo máximo
- Taxa de erro HTTP
- Disponibilidade

---

# Integração Contínua

Os testes são executados automaticamente pelo GitHub Actions através do workflow:

```text
.github/workflows/performance-tests.yml
```

---

# Tecnologias

- Grafana k6
- Docker
- GitHub Actions
- OWASP Juice Shop

---

# Versões

| Ferramenta | Versão |
|------------|---------|
| k6 | 2.x |
| Docker | Latest |

---

# Cobertura

| Cenário | Status |
|----------|--------|
| Smoke Test | ✅ |
| Load Test | ✅ |
| Stress Test | ✅ |