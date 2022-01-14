const { mergeResolvers } = require('@graphql-tools/merge');
const clientResolver = require('./clientResolver');
const addressResolver = require('./addressResolver');

const resolvers = [clientResolver, addressResolver];

module.exports = mergeResolvers(resolvers);
