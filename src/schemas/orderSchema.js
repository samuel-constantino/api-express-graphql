const { gql } = require('apollo-server-express');

const orderSchema = gql`
    type Order {
        clientId: Int!
        productId: Int!
        order: Order!
    }

    type Query {
        getOrder(id: Int!): Order!
    }

    type Mutation {
        createOrder(
            clientId: Int!
            productId: Int!
        ): Order!
    }
`;

module.exports = orderSchema;