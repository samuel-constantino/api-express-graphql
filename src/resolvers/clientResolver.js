const clientResolver = {
    Query: {
        async getClient(_root, { id }, { models }) {
            return models.Client.findByPk(id);
        },

        async getAllClients(_root, _args, { models }) {
            return models.Client.findAll();
        },
    },

    Mutation: {
        async createClient(_root, { name, email, cpf, bithdate }, { models }) {
            return models.Client.create({
                name, email, cpf, bithdate,
            });
        },

        async removeClient(_root, { id }, { models }) {
            await models.Client.destroy({ where: { id } });
            return 'Cliente removido com sucesso';
        },
    },

    Client: {
        async address(Client, _args, { models }) {
            return models.Address.findAll({ where: { ClientId: Client.id } });
        },
    },
};

module.exports = clientResolver;
