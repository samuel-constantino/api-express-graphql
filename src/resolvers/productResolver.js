const productResolver = {
    Query: {
        async getProduct(_root, { id }, { models }) {
            return models.Product.findByPk(id);
        },
    },

    Mutation: {
        async createProduct(_root, args, { models }) {
            const { name, image, description, weight, price, quantity } = args;
            return models.Product.create(
                { name, image, description, weight, price, quantity },
            );
        },
    },

    Product: {
        async product(product) {
            return product.getProduct();
        },
    },
};

module.exports = productResolver;
