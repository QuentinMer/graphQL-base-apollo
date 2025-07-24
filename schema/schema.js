const { gql } = require('graphql-tag');
const axios = require('axios');

const typeDefs = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        age: Int!
        fullName: String!
    }
    type Query {
        user(id: String!): User
        users: [User!]!
    }
    type Animal {
        id: ID!
        name: String!
        age: Int!
    }
    type Query {
        animal(id: String!): Animal
        animals: [Animal!]!
    }
`;

const resolvers = {
    User: {
        fullName: (parent) => {
            return `${parent.firstName} ${parent.lastName}`;
        }
    },
    Query: {
        user: async (parent, { id }) => {
            try {
                const response = await axios.get(`http://localhost:3001/users/${id}`);
                return response.data;
            } catch (error) {
                throw new Error(`Utilisateur non trouvé: ${error.message}`);
            }
        },
        users: async () => {
            try {
                const response = await axios.get('http://localhost:3001/users');
                return response.data;
            } catch (error) {
                throw new Error(`Erreur lors de la récupération des utilisateurs: ${error.message}`);
            }
        },
        animal: async (parent, { id }) => {
            try {
                const response = await axios.get(`http://localhost:3005/animals/${id}`);
                return response.data;
            } catch (error) {
                throw new Error(`Animal non trouvé: ${error.message}`);
            }
        },
        animals: async () => {
            try {
                const response = await axios.get('http://localhost:3005/animals');
                return response.data;
            } catch (error) {
                throw new Error(`Erreur lors de la récupération des animaux: ${error.message}`);
            }
        }
    }
};

module.exports = { typeDefs, resolvers };