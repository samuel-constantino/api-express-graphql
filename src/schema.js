const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        clients: [Client!],
        client(id: Int!): Client!,
    }

    type Client {
        id: ID!,
        name: String!,
        email: String!,
        cpf: String!,
        birthdate: String!,
        adress: [Adress!]!,
    }

    type Adress {
        id: ID!,
        street: String!,
        city: String!,
        district: String!,
        state: String!,
        country: String!,
        zipcode: String!,
        number: String!,
        client: Client!,
    }
`);

module.exports = schema;
