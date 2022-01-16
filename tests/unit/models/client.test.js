/* eslint-disable */
const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
} = require('sequelize-test-helpers');

const { expect } = require('chai');

const Client = require('../../../models/client');

describe('Testa modelo de Cliente', () => {
    const ClientModel = Client(sequelize, dataTypes);

    const client = new ClientModel();

    const properties = ['name', 'email', 'cpf', 'birthday'];

    describe('possui o nome "Client"', () => {
        checkModelName(ClientModel)('Client');
    });

    describe('possui as propriedades corretas', () => {
        properties.forEach(checkPropertyExists(client));
    });
});
