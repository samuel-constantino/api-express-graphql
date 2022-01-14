const orderResolver = {
    Query: {
        async getOrder(_root, { id }, { models }) {
            return models.Order.findByPk(id);
        },
    },

    Mutation: {
        async createOrder(_root, args, { models }) {
            const { clientId, productId } = args;
            return models.Order.create(
                { clientId, productId },
            );
        },
    },

    Order: {
        async order(order) {
            return order.getOrder();
        },
    },
};

module.exports = orderResolver;
