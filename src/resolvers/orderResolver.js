const { create } = require('../services/order');

const orderResolver = {
    Query: {
        async getOrder(_root, { id }, { models }) {
            return models.Order.findByPk(id);
        },
    },

    Mutation: {
        async createOrder(_root, args, { models }) {
            const { clientId, productsIds } = args;

            const result = create(clientId, productsIds, models);

            return result;
        },
    },

    Order: {
        async order(order) {
            return order.getOrder();
        },
    },
};

module.exports = orderResolver;
