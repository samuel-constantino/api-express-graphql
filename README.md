
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

### Documentação interativa
No Playground do link acima é possível acessar a documentação nativa disponibilizada pelo Graphql:

![interative-doc-graphql](https://github.com/samuel-constantino/api-express-graphql/blob/main/imgs/interative-doc-graphql.gif)

### Banco de Dados
O banco de dados dessa aplicação possui três entidades: Cliente, Produto e Pedido. A imagem a seguir representa seus atributos e relacionamentos:

![data-base-model](https://github.com/samuel-constantino/api-express-graphql/blob/main/imgs/bd.png)
### Schema

Segue o esquema que representa as entidades na API:

```sh
type Query {

	clients: [Client!],

	client(id: Int!): Client,

	products: [Product!],

	product(id: Int!): Product,

	orders: [Order!],

	order(id: Int!): Order,

}

type Client {

	id: ID!,

	name: String!,

	email: String!,

	cpf: String!,

	birthdate: String!,

	street: String!,

	city: String!,

	district: String!,

	state: String!,

	country: String!,

	zipcode: String!,

	number: String!,

}

type Product {

	id: ID!,

	name: String!,

	image: String!,

	description: String!,

	weight: Float!,

	price: Float!,

	quantity: Int!,

}

type Order {

	id: ID!,

	client_id: ID!,

	product_id: ID!,

	created_at: String!,

	installments: Int!,

	status: String!,

}

type Mutation {

	addClient(

		name: String!,

		email: String!,

		cpf: String!,

		birthdate: String!,

		street: String!,

		city: String!,

		district: String!,

		state: String!,

		country: String!,

		zipcode: String!,

		number: String!

	): Client!,

	updateClient(

		id: ID!,

		name: String!,

		email: String!,

		cpf: String!,

		birthdate: String!,

		street: String!,

		city: String!,

		district: String!,

		state: String!,

		country: String!,

		zipcode: String!,

		number: String!

	): Client!,

	removeClient(id: ID!): Client!

	addProduct(

		name: String!,

		image: String!,

		description: String!,

		weight: Float!,

		price: Float!,

		quantity: Int!

		): Product!,

		updateProduct(

		id: ID!,

		name: String!,

		image: String!,

		description: String!,

		weight: Float!,

		price: Float!,

		quantity: Int!

	): Product!,

	removeProduct(id: ID!): Product!

	addOrder(

	client_id: ID!,

	product_id: ID!,

	installments: Int!,

	status: String!

	): Order!,

		updateOrder(

		id: ID!,

		client_id: ID!,

		product_id: ID!,

		installments: Int!,

		status: String!

	): Order!,

	removeOrder( id: ID! ): Order!

}
```

### Queries

Em APIs GraphQL é possível formar suas queries de acordo com sua necessidade. Será mostrado aqui uma forma genérica de pesquisa:

#### Products

```shh
query getAllProducts{
  products{
    id,
    name,
    description,
    weight,
    price,
    quantity
  }
}

query getProductById{
  product(id:1){
    id,
    name,
    description,
    weight,
    price,
    quantity
  }
}
```

#### Clients

```sh
query getAllClients{
  clients{
    id,
    name,
    email,
    cpf,
    birthdate,
    street,
    city,
    district,
    state,
    country,
    zipcode,
    number,
  }
}

query getById {
  client(id:1){
    id,
    name,
    email,
    cpf,
    birthdate,
    street,
    city,
    district,
    state,
    country,
    zipcode,
    number,
  }
}
```

#### Orders

```sh
query getAllOrders{
  orders{
    id,
    client_id,
    product_id,
    created_at,
    installments,
    status
  }
}

query getOrderById{
  order(id:1){
    id,
    client_id,
    product_id,
    created_at,
    installments,
    status
  }
}
```

### Mutations
Segue formas de criar, alterar ou remover dados:

#### Products

```sh
mutation addProduct{
  addProduct(
    name: "Produto Teste 1",
    image: "URL-Teste 1"
    description: "Descrição Teste 1",
    weight: 1.5,
    price: 2.5,
    quantity: 1
  ){
  	id,
    name,
    description,
    weight,
    price,
    quantity
  }
}

mutation updateProduct{
	updateProduct(
    id: 1,
    name: "Produto Teste 1",
    image: "URL-Teste 1"
    description: "Descrição Teste 1",
    weight: 1.5,
    price: 2.5,
    quantity: 1
  ){
      	id,
    name,
    description,
    weight,
    price,
    quantity
  }
}

mutation removeProduct{
  removeProduct(id:4){
    id,
  }
}
```

#### Clients

```sh
mutation addClient{
  addClient(
    name: "Cliente Teste",
    email: "teste@teste.com",
    cpf: "022.123.433-23",
    birthdate: "1998-02-02",
    street: "Rua Teste",
    city: "Cidade Teste",
    district: "Bairro Teste",
    state: "Estado Teste",
    country: "País Teste",
    zipcode: "32230-123",
    number: "21a"
  ){
    id,
    name,
    email,
    cpf,
    birthdate,
    street,
    city,
    district,
    state,
    country,
    zipcode,
    number,
  }
}

mutation updateClient{
  updateClient(
    id: 1,
    name: "Cliente Teste 1",
    email: "teste1@gmail.com",
    cpf: "022.123.433-21",
    birthdate: "1998-02-01",
    street: "Rua Teste 1",
    city: "Cidade Teste 1",
    district: "Bairro Teste 1",
    state: "Estado Teste 1",
    country: "País Teste 1",
    zipcode: "32230-121",
    number: "211"
  ){
    id,
    name,
    email,
    cpf,
    birthdate,
    street,
    city,
    district,
    state,
    country,
    zipcode,
    number,
  }
}

mutation removeClient{
  removeClient(id:1){
    id,
  }
}
```

#### Orders

```sh
mutation addOrder{
  addOrder(
    client_id: 1,
    product_id: 1,
    installments: 2,
    status: "PENDENTE"
  ){
    id,
    client_id,
    product_id,
    created_at,
    installments,
    status
  }
}

mutation updateOrder{
  updateOrder(
    id: 1,
    client_id: 2,
    product_id: 2,
    installments: 3,
    status: "PENDENTE"
  ){
    id,
    client_id,
    product_id,
    created_at,
    installments,
    status
  }
}

mutation removeOrder{
  removeOrder(id: 1){
    id,
  }
}
```

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
