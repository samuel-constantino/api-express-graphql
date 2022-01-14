const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas/rootSchemas');
const resolvers = require('./resolvers/rootResolvers');
const models = require('../models');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models },
});

const app = express();

server.start()
    .then((_res) => {
        server.applyMiddleware({ app });
    });

const testConnection = async () => {
    try {
        await models.sequelize.authenticate();
        
        console.log('Conexão estabelecida com sucesso.');
        
        await models.sequelize.sync();
        
        console.log('Todos os módulos foram sincronizados com sucesso.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error.message);
    }
};
testConnection();

module.exports = app;
