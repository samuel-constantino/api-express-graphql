const { mergeResolvers } = require('@graphql-tools/merge');
const clientResolver = require('./clientResolver');
const addressResolver = require('./addressResolver');
const productResolver = require('./productResolver');
const orderResolver = require('./orderResolver');

const resolvers = [clientResolver, addressResolver, productResolver, orderResolver];

module.exports = mergeResolvers(resolvers);
