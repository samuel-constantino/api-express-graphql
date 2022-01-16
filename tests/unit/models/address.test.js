/* eslint-disable */
const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
} = require('sequelize-test-helpers');

const Address = require('../../../models/address');

describe('Testa modelo de Endereço', function () {
    const AddressModel = Address(sequelize, dataTypes);

    const address = new AddressModel();

    describe('possui o nome "Address"', function () {
        checkModelName(AddressModel)('Address');
    });

    describe('possui as propriedades corretas', function () {
        const properties = ['street', 'district', 'city', 'state', 'country', 'cep', 'number'];
        properties.forEach(checkPropertyExists(address));
    });
});
