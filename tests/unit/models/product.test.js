/* eslint-disable */
const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
    checkUniqueIndex,
} = require('sequelize-test-helpers');

const Product = require('../../../models/product');

describe('Testa modelo de Produto', function () {
    const ProductModel = Product(sequelize, dataTypes);

    const product = new ProductModel();

    describe('possui o nome "Product"', function () {
        checkModelName(ProductModel)('Product');
    });
    
    describe('possui as propriedades corretas', function () {
        const properties = ['name', 'image', 'description', 'weight', 'price', 'quantity'];
        properties.forEach(checkPropertyExists(product));
    });

    describe('possui indexes únicos corretos', function () {
        const indexes = ['name', 'image', 'description'];

        [indexes].forEach(checkUniqueIndex(product));
    });
});
