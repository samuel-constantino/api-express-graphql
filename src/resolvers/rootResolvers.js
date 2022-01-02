const clientResolver = require('./clientResolver');

const resolvers = {
    clients: async () => clientResolver.getAll(),

    client: async ({ id }) => clientResolver.getById(id),

    addClient: async (args) => clientResolver.create(args),

    updateClient: async (args) => clientResolver.update(args),

    removeClient: async ({ id }) => clientResolver.remove(id),
};

module.exports = resolvers;
