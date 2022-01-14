const addressResolver = {
    Query: {
        async getAddress(_root, { id }, { models }) {
            return models.Address.findByPk(id);
        },
    },

    Mutation: {
        async createAddress(_root, args, { models }) {
            const { clientId, street, district, city, state, country, cep, number } = args;
            return models.Address.create(
                { clientId, street, district, city, state, country, cep, number },
            );
        },
    },

    Address: {
        async client(client) {
            return client.getClient();
        },
    },
};

module.exports = addressResolver;
