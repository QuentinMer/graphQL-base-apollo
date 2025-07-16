const { gql } = require('graphql-tag');
const _ = require('lodash');

const users = [
    { id: '1', firstName: 'Côme', lastName: 'Mercier', age: 1 },
    { id: '2', firstName: 'Florence', lastName: 'Demolder', age: 36 },
    { id: '3', firstName: 'Quentin', lastName: 'Mercier', age: 37 }
];

const typeDefs = gql`
    type User {
        id: String!
        firstName: String!
        lastName: String!
        age: Int!
    }

    type Query {
        user(id: String!): User
        users: [User!]!
    }
`;

const resolvers = {
    Query: {
        user: (parent, { id }) => {
            return _.find(users, { id });
        },
        users: () => {
            return users;
        }
    }
};

module.exports = { typeDefs, resolvers };