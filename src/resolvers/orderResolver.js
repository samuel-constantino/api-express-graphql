const orderResolver = {
    Query: {
        async getOrder(_root, { id }, { models }) {
            return models.Order.findByPk(id);
        },
    },

    Mutation: {
        async createOrder(_root, args, { models }) {
            const { clientId, productsIds } = args;

            productsIds.forEach(async (productId) => {
                await models.Order.create(
                    { clientId, productId },
                );
            });

            return 'Pedido de compra efetuado com sucesso';
        },
    },

    Order: {
        async order(order) {
            return order.getOrder();
        },
    },
};

module.exports = orderResolver;
