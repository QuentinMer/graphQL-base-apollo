
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./schema/schema');

const app = express();

// Créer l'instance Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Démarrer le serveur Apollo
async function startServer() {
    await server.start();
    
    app.use(express.json()); // Ajout du middleware pour parser le JSON
    // Appliquer le middleware Apollo à Express
    app.use('/graphql', expressMiddleware(server));
    
    app.listen(4000, () => {
        console.log('🚀🚀🚀 Server Apollo is running on port 4000 🚀🚀🚀');
        console.log('📊 GraphQL Playground: http://localhost:4000/graphql');
    });
}

startServer();