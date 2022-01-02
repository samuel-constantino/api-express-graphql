const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const expressPlayground = require('graphql-playground-middleware-express').default;

const { createDatabase } = require('./database/database');
const schema = require('./schema');
const resolvers = require('./resolvers/rootResolvers');

createDatabase();

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
}));

// GraphQL Playground route
app.use('/playground', expressPlayground({
    endpoint: '/graphql',
}));

module.exports = app;
