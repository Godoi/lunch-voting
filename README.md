# Lunch Voting
Lunch Voting é uma aplicação que auxilia na tomada de decisão na escolha do restaurante para
almoçar. Ao acessar, será disponibilizada uma relação de restaurantes para a votação que estará disponível até o meio dia na data atual, após esse horário o voto contará para o
dia posterior. 
Para votar é necessário usar o email de cadastrado e não será permitido mais que um voto.
Atualmente está disponível uma relação de 10 usuários com e-mail para testar o sistema.

## Features (O que poderia ser feito)
- Cadastro de usuário;
- Cadastro dos restaurantes;
- Grupo de usuários para a votação;
- Implementar uma regra de desempate;
- Opção randômica de escolha de restaurante;
- Loading para carregar a lista de restaurante;

## Server
Antes de executar o aplicação, é necessário o serviço  [lunch-voting-server](https://github.com/Godoi/lunch-voting-server). Está disponível para clonar em `https://github.com/Godoi/lunch-voting-server`. 

Após a clonagem, vá para o diretório do aplicativo `lunch-vote-server` e execute os comandos` npm install` para instalar as dependências e `npm run start` para subir o serviço.

Verifique se aplicação server está up `http://localhost:3000`

## Installing system-helps application
Acesse o projeto e execute o comando `npm install`.

## Development server
Execute `npm start` para subir aplicação web. Acesse o `http://localhost:4200/`.

## Code scaffolding
Execute `ng generate component component-name` para gerar novos componentes. Poderá usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests
Execute `npm test` para executar os teste.
Execute `npm run test: watch` ou `npm run test -- --watch` para executar os teste unitários com
a opção de recarregar automático e de busca de arquivos.
Desenvolvido em Jest [Jest](https://jestjs.io/).

## Running end-to-end tests
Subir o serviço `lunch-vote-server`.
Execute `npx cypress open or npm run cypress` para executar end-to-end os testes via [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html).

Os teste estão disponíveuis na pasta <b>application</b>.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).