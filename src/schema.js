const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        clients: [Client!],
        client(id: Int!): Client,

        products: [Product!],
        product(id: Int!): Product,
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
    }

`);

module.exports = schema;
