# Plano de Testes

## Escopo

- Testes automatizados de API
- Testes E2E
- Teste de carga básico
- Execução em CI/CD

## Cenários API

- GET produtos com sucesso
- GET endpoint inexistente
- POST login inválido
- POST payload malformado
- PUT payload inválido
- DELETE sem autenticação

## Cenários E2E

- Login inválido
- Adicionar item ao carrinho
- Fluxo futuro sugerido: checkout completo com massa de dados válida e inválida

## Critérios de aceite

- Testes executáveis via linha de comando
- Relatórios gerados automaticamente
- README com instruções claras
- Pipeline configurado no GitHub Actions
