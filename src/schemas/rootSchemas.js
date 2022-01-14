const { mergeTypeDefs } = require('@graphql-tools/merge');

const clientSchema = require('./clientSchema');
const addressSchema = require('./addressSchema');

const types = [clientSchema, addressSchema];

module.exports = mergeTypeDefs(types);
