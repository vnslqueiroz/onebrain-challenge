# Desafio Onebrain Cypress 🚀

Este repositório contém um desafio automatizado utilizando Cypress.
Durante o desafio tive algumas dificuldades que interferiram no andamento da construção das suites de teste, sendo eles:
  - Na criação do perfil, nenhum CEP era tido como válido;
  - Todos os produtos TENDA estavam indisponíveis;
  - No Checkout do carrinho, não era possível avançar pois qualquer região que indicamos era tida como inválida ou que não fazia parte das regiões de entrega.

## 📌 Tecnologias utilizadas
- Cypress
- JavaScript
- Node.js

## 📂 Estrutura do Projeto
📦 desafio-cypress
┣ 📂 cypress
┃ ┣ 📂 e2e  (Aqui está o arquivo com os scripts de teste.)
┃ ┣ 📂 fixtures
┃ ┣ 📂 support  (Aqui está o arquivo onde os comandos Cypress foram criados para tornar os scripts mais legíveis.)
┣ 📜 cypress.config.js
┣ 📜 cypress.env.js  (Oculto - arquivo com credenciais de acesso para tornar os logs dos testes mais seguros, evitando vazamento de credenciaias.)
┣ 📜 package.json
┣ 📜 README.md


## 🚀 Como executar os testes
1. Instale as dependências:  
   ```sh
   npm install

## Rodar os testes em headless
npx cypress run

## Rodar os testes com interface gráfica
npx cypress open
