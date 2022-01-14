const { mergeResolvers } = require('@graphql-tools/merge');
const clientResolver = require('./clientResolver');
const addressResolver = require('./addressResolver');
const productResolver = require('./productResolver');

const resolvers = [clientResolver, addressResolver, productResolver];

module.exports = mergeResolvers(resolvers);
