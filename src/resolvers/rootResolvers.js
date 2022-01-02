const clientResolver = require('./clientResolver');
const productResolver = require('./productResolver');
const orderResolver = require('./orderResolver');

const resolvers = {
    clients: async () => clientResolver.getAll(),

    client: async ({ id }) => clientResolver.getById(id),

    addClient: async (args) => clientResolver.create(args),

    updateClient: async (args) => clientResolver.update(args),

    removeClient: async ({ id }) => clientResolver.remove(id),

    products: async () => productResolver.getAll(),

    product: async ({ id }) => productResolver.getById(id),

    addProduct: async (args) => productResolver.create(args),

    updateProduct: async (args) => productResolver.update(args),

    removeProduct: async ({ id }) => productResolver.remove(id),

    orders: async () => orderResolver.getAll(),

    order: async ({ id }) => orderResolver.getById(id),

    addOrder: async (args) => orderResolver.create(args),

    updateOrder: async (args) => orderResolver.update(args),

    removeOrder: async ({ id }) => orderResolver.remove(id),
};

module.exports = resolvers;
