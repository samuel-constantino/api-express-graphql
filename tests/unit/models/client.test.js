/* eslint-disable */
const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
} = require('sequelize-test-helpers');

const { expect } = require('chai');

const clientModel = require('../../../models/client');
const addressModel = require('../../../models/client');

describe('Testa modelo de Cliente', () => {
    const Client = clientModel(sequelize, dataTypes);

    const client = new Client();

    describe('possui o nome "client"', () => {
        checkModelName(Client)('Client');
    });

    describe('possui as propriedades corretas', () => {
        const properties = ['name', 'email', 'cpf', 'birthday'];

        properties.forEach(checkPropertyExists(client));
    });
});
