# Apollo GraphQL Server Demo

Ce projet démontre l'utilisation d'Apollo Server avec Express pour créer une API GraphQL moderne.

## 🚀 Fonctionnalités

- **Serveur Apollo GraphQL** avec Express
- **Schéma GraphQL** avec SDL (Schema Definition Language)
- **Résolveurs** pour les requêtes et mutations
- **Playground GraphQL** intégré
- **Gestion d'erreurs** personnalisée

## 📋 API GraphQL

### Types

```graphql
type User {
  id: ID!
  firstName: String!
  lastName: String!
  age: Int!
  fullName: String!
}
```

### Requêtes (Queries)

- `user(id: ID!)` - Récupérer un utilisateur par ID
- `users` - Récupérer tous les utilisateurs
- `userCount` - Compter le nombre d'utilisateurs


## 🛠️ Installation

```bash
npm install
```

## 🏃‍♂️ Démarrage

```bash
# Démarrage normal
npm start

# Démarrage en mode développement (avec nodemon)
npm run dev
```

## 🌐 Accès

- **Serveur**: http://localhost:4000
- **GraphQL Playground**: http://localhost:4000/graphql
- **API Endpoint**: http://localhost:4000/graphql

## 📝 Exemples de requêtes

### Récupérer tous les utilisateurs
```graphql
query {
  users {
    id
    firstName
    lastName
    age
    fullName
  }
}
```

### Récupérer un utilisateur par ID
```graphql
query {
  user(id: "1") {
    id
    firstName
    lastName
    age
    fullName
  }
}
```

## 🔧 Technologies utilisées

- **Apollo Server** - Serveur GraphQL moderne
- **Express** - Framework web pour Node.js
- **GraphQL** - Langage de requête et runtime
- **Axios** - Client HTTP pour les appels API

## 📚 Ressources

- [Documentation Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Documentation GraphQL](https://graphql.org/)
- [Express.js](https://expressjs.com/) 