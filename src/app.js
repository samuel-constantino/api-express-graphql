const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schemas/rootSchemas');
const resolvers = require('./resolvers/rootResolvers');
const models = require('../models');
const testConnection = require('./util/testConnection');

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

testConnection();

module.exports = app;
