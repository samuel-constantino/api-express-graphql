/* eslint-disable */
const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
    checkUniqueIndex,
} = require('sequelize-test-helpers');

const chai = require('chai');

const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const Client = require('../../../models/client');

describe('Testa modelo de Cliente', function () {
    const ClientModel = Client(sequelize, dataTypes);

    const client = new ClientModel();

    describe('possui o nome "Client"', function () {
        checkModelName(ClientModel)('Client');
    });
    
    describe('possui as propriedades corretas', function () {
        const properties = ['name', 'email', 'cpf', 'birthday'];

        properties.forEach(checkPropertyExists(client));
    });

    describe('possui indexes únicos corretos', function () {
        const indexes = ['cpf', 'email'];

        [indexes].forEach(checkUniqueIndex(client));
    });
});
