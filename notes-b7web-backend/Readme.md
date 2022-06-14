## Sobre 📕

Back-end desenvolvido para o teste da B7Web.

---

## Descrição :book:

O projeto tem por base um CRUD de Notas, com Título, conteúdo, cor de background e cor de texto.

---

## Tecnologias 🚀

As tecnologias utilizadas foram:

-   [Node](https://nodejs.org/en/)
-   [Sequelize](https://sequelize.org/)
-   [Express](https://expressjs.com/pt-br/)
-   [Mysql](https://www.mysql.com/)
-   [Typescript](https://www.typescriptlang.org/)

## Instalação

---

No seu terminal, rode os comandos abaixo:

```bash
$ git clone https://github.com/luizsantos85/teste-b7web
$ cd teste-b7web/notes-b7web-backend
```

Instalar depêndencias e executar o back-end:

```bash
$ npm install
$ npm start
```

## Formato da tabela de banco de dados

```bash
===Base de Dados teste-b7web

== Estrutura da tabela notes

|------
|Coluna|Tipo|Nulo|Predefinido
|------
|//**id**//|int|Não|
|title|varchar(255)|Não|
|content|text|Não|
|bg_color|varchar(255)|Sim|#ffffff
|text_color|varchar(255)|Sim|#000000
```

Made by [@luizsantos85](https://github.com/luizsantos85) :rocket:
