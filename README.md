# gorila-api

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

gorila-api é uma api desenvolvida com base nas tecnologias NodeJs, Typescript e com banco orientando a documentos MongoDb e com base nos princios de TDD (ulizando jest para unit tests e supertest para integration), Clean Architecture, SOLID e seus design patterns. Criada para cumprir o [desafio](https://www.notion.so/Teste-Gorila-Full-Stack-J-nior-e-Pleno-d5e1b497ff64430ab6bb50aa988e2429) da Gorila invest de criar uma carteira de ativos de renda fixa e renda variada simplificada.

# Features!
  - SignUp API: Criação de usuario com senha cryptografada utilizando Bcrypt e o padrão JwT
  - Login e geração de token de assccessToken cryptogradado
  - Middleware de autenticação das rotas
  - Criação de investimentos de renda passiva e ativa
  
# endpoints:
  - POST /investments/{id}:  adiciona um novo investimento ao banco de dados
  - DELETE /investments/{id}: remove um investimento do banco de dados
  - GET /investments: lista todos os investimentos
  - GET /investments/tickets returna algums nomes de açoes da b3 para utilziar no front
  - POST /login: recebe através do body um email e password para autenticação, se correto retorno assccesToken // não precisa autenticar é publica
  - POST /signup: recebe dados de criação do usuario no body(name, password, passwordConfirmatio e email) cria um usuario na base // não precisa autenticar é publica
  -
### Tech

gorila-api usa:

* [NodeJs]
* [JwT]
* [Bcrypt]
* [Jest]
* [supertes]
* [Express]
* [Eslint]
* [MongoDb]

Codigo publicado no GitHub

### Installation

gorila-api presisa [Node.js](https://nodejs.org/) v10+ para rodar.
npm para o gerenciamento e download das dependencias
MongoDb

Com essas depencias instaladas, basta clonar o repositorio do git, navegar até a pas raiz da aplicação e rodas os seguintes comandos:

```sh
$ npm install
$ npm run dev //rodar em modo de desenvolvedor
$ npm run build //gerar a pasta dis para rodar em produção
$ npm run start //rodar a api apartir dos arquivos de build /dist
```

Tests:

```sh
$ npm run test:unit // roda apenas testes unitarios
$ npm run test:integration // roda apenas os test de integração
$ npm run test // roda todos os test tanto integration quanto unit
$ npm run test:ci // roda todos os tentes monstrando a cobertura total
```

A api está hospedada no heroku versão free dyno, por isso quando não utiliza o heroku a desliga até a proxima requisição, por isso pode demorar um pouco para a primeira resposta.

Link da api: https://api-gorila-one.herokuapp.com/api/