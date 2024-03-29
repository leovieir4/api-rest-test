# api-rest-test

api-rest-test é uma api desenvolvida com base nas tecnologias NodeJs, Typescript e com banco orientando a documentos MongoDb e com base nos princios de TDD (ulizando jest para unit tests e supertest para integration), Clean Architecture, SOLID e seus design patterns.

# Features!
  - SignUp API: Criação de usuario com senha cryptografada utilizando Bcrypt e o padrão JwT
  - Login e geração de token de assccessToken cryptografado
  - Middleware de autenticação das rotas
  - Criação de investimentos de renda passiva e ativa
  
# endpoints:
  - POST /investments/{id}:  adiciona um novo investimento ao banco de dados
  - DELETE /investments/{id}: remove um investimento do banco de dados
  - GET /investments{id}: lista todos os investimentos do usuário
  - GET /investments/tickets retorna alguns nomes de açoes da b3 para utilzar no front
  - POST /login: recebe através do body um email e password para autenticação, se correto retorna o assccesToken // não precisa autenticar é publica
  - POST /signup: recebe dados de criação do usuario no body(name, password, passwordConfirmatio e email) cria um usuario na base // não precisa autenticar é publica

### Tech

api-rest-test usa:

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

api-rest-test precisa [Node.js](https://nodejs.org/) v10+ para rodar.
npm para o gerenciamento e download das dependencias e MongoDb

Com essas depencias instaladas, basta clonar o repositorio do git, navegar até a pasta raiz da aplicação e rodar os seguintes comandos:

```sh
$ npm install
$ npm run dev //rodar em modo de desenvolvedor
$ npm run build //gerar a pasta dist para rodar em produção
$ npm run start //rodar a api apartir dos arquivos de build /dist
```

### Tests:

```sh
$ npm run test:unit // roda apenas testes unitarios
$ npm run test:integration // roda apenas os testes de integração
$ npm run test // roda todos os testes tanto integration quanto unit
$ npm run test:ci // roda todos os testes monstrando a cobertura total
```
