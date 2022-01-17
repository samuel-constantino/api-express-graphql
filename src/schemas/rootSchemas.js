const { mergeTypeDefs } = require('@graphql-tools/merge');

const clientSchema = require('./clientSchema');
const addressSchema = require('./addressSchema');
const productSchema = require('./productSchema');
const orderSchema = require('./orderSchema');

const types = [clientSchema, addressSchema, productSchema, orderSchema];

module.exports = mergeTypeDefs(types);
