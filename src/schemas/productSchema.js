const { gql } = require('apollo-server-express');

const productSchema = gql`
    type Product {
        id: Int!
        name: String!
        image: String!
        description: String!
        weight: Float!
        price: String!
        quantity: String!
        product: Product!
    }

    type Query {
        getProduct(id: Int!): Product!
    }

    type Mutation {
        createProduct(
            name: String!
            image: String!
            description: String!
            weight: Float!
            price: String!
            quantity: String!
        ): Product!
    }
`;

module.exports = productSchema;