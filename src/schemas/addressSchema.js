const { gql } = require('apollo-server-express');

const addressSchema = gql`
    type Address {
        id: Int!
        street: String!
        distric: String!
        city: String!
        state: String!
        country: String!
        cep: String!
        number: String!
        client: Client!
    }

    type Query {
        getAddress(id: Int!): Address
    }

    type Mutation {
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

module.exports = addressSchema;