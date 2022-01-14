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

models.sequelize.authenticate();
models.sequelize.sync();

module.exports = app;
