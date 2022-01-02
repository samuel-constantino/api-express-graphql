const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        clients: [Client!],
        client(id: Int!): Client,
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
    }

`);

module.exports = schema;
