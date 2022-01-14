const { mergeTypeDefs } = require('@graphql-tools/merge');

const clientSchema = require('./clientSchema');
const addressSchema = require('./addressSchema');
const productSchema = require('./productSchema');

const types = [clientSchema, addressSchema, productSchema];

module.exports = mergeTypeDefs(types);
