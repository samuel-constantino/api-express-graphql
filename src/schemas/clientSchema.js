const { gql } = require('apollo-server-express');

const clientSchema = gql`
    type Client {
        id: Int!
        name: String!
        email: String!
        cpf: String!
        birthdate: String!
        address: [Address!]!
    }

    type Query {
        getClient(id: Int!): Client
        getAllClients: [Client!]!
    }

    type Mutation {
        createClient(
            name: String!,
            email: String!,
            cpf: String!,
            birthdate: String!
        ): Client!

        removeClient(id: Int!): String!
        
        createAddress(
            clientId: Int!
            street: String!,
            distric: String!,
            city: String!,
            state: String!,
            country: String!,
            cep: String!,
            number: String!,
        ): Address!
    }
`;

module.exports = clientSchema;
