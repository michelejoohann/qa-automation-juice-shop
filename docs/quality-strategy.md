# Quality Strategy

Este projeto utiliza uma estratégia de qualidade em múltiplas camadas.

## Camadas de Teste

### API

Valida contratos, status code, payloads, autenticação e regras básicas de negócio.

### E2E

Valida fluxos reais do usuário na interface web.

### Performance

Valida comportamento da API sob carga controlada.

## Ferramentas

| Camada | Ferramenta |
|---|---|
| API | RestAssured |
| E2E | Playwright + Cucumber |
| Performance | k6 |
| Relatórios | Allure / Cucumber Report |
| CI/CD | GitHub Actions |

## Critérios de Qualidade

- Testes independentes
- Código organizado em camadas
- Massa de dados controlada
- Relatórios gerados automaticamente
- Execução em pipeline