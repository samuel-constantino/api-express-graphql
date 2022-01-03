
<h1  align="center">Bem-vindo ao api-express-graphql 👋</h1>

<p>

<img  alt="Version"  src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000"  />

<a  href="https://github.com/samuel-constantino/api-express-graphql#readme"  target="_blank">

<img  alt="Documentation"  src="https://img.shields.io/badge/documentation-yes-brightgreen.svg"  />

</a>

<a  href="https://github.com/samuel-constantino/api-express-graphql/graphs/commit-activity"  target="_blank">

<img  alt="Maintenance"  src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"  />

</a>

<a  href="https://github.com/samuel-constantino/api-express-graphql/blob/master/LICENSE"  target="_blank">

<img  alt="License: ISC"  src="https://img.shields.io/github/license/samuel-constantino/api-express-graphql"  />

</a>

</p>

> Esta é uma API construída com <b>Express</b> + <b>GraphQL</b> + <b>SQLite</b> e testada com <b>Jest</b> + <b>Supertest</b> para simulação de e-commerce com <b>CRUD</b> de Clientes, Produtos e Pedidos de vendas com controle de estoque e envio automático de e-mail com <b>Nodemailer</b> para confirmação de compra.
> As tecnologias citadas foram utilizadas visando sua praticidade e baixa curva de aprendizado.
> Os principais desafios encontrados durante o desenvolvimento foi a utilização de ferramentas novas e implementação de <b>testes unitários</b>, que me levou a aprender sobre <b>novas tecnologias</b>.
> A expectativa para <b>novas features</b> incluem a implementação de Login baseado em <b>JWT</b> e Envio de notificação e monitoramento de compra pelo WhatsApp com a ferramenta <b>@open-wa/wa-automate</b>.

## Sumário

- [Documentação](#documentação)
- [Instalação](#instalação)
- [Uso](#Uso)
- [Testes](#testes)
- [Autor](#autor)
- [Suporte](#suporte)
- [Licença](#licença)

## Documentação

Esta API está disponível para uso público em [Playground GraphQL](https://api-express-graphql-0209.herokuapp.com/playground).

### Banco de Dados
O banco de dados dessa aplicação possui três entidades: Cliente, Produto e Pedido. A imagem a seguir representa seus atributos e relacionamentos:

[Schema]
[Queries]
[Mutations]

## Instalação
```sh
git clone git@github.com:samuel-constantino/api-express-graphql.git
```
```sh
cd api-express-graphql
```
```sh
npm install
```

## Uso

```sh
npm start
```

## Testes

```sh
npm run test
```

## Autor

👤 **Samuel Constantino <samuelicapuidados@gmail.com>**

* Website: https://www.linkedin.com/in/samuel-constantino/

* Github: [@samuel-constantino](https://github.com/samuel-constantino)

  

## Suporte

Deixe uma ⭐️ se este projeto te ajudou!

## 📝 Licença

Copyright © 2022 [Samuel Constantino <samuelicapuidados@gmail.com>](https://github.com/samuel-constantino).<br  />

Este projeto possui a licença [ISC](https://github.com/samuel-constantino/api-express-graphql/blob/master/LICENSE).

***

_Este README foi baseado no templete [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_