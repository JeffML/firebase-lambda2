/* eslint-disable no-unused-vars */
const apolloLambda = require('apollo-server-lambda');

const {
  ApolloServer,
  gql,
} = apolloLambda;
const admin = require('firebase-admin');
const credential = require('./pgnfen2-0dcc7c57af09.json');


admin.initializeApp({
  credential: admin.credential.cert(credential),
});


const typeDefs = gql`
  type Query {
    hello: String
    allAuthors: [Author!]
    author(id: Int!): Author
    authorByName(name: String!): Author
  }
  type Mutation {
    addDoc: Author!
  }
  type Author {
    id: ID!
    name: String!
    married: Boolean!
  }
`;

const authors = [{
  id: 1,
  name: 'Terry Pratchett',
  married: false,
},
{
  id: 2,
  name: 'Stephen King',
  married: true,
},
{
  id: 3,
  name: 'JK Rowling',
  married: false,
},
];

const index = 1;

const addDoc = async () => {
  admin.firestore()
    .doc('posts/author')
    .set(authors[index]);
  return authors[index];
};


const resolvers = {
  Query: {
    hello: (root, args, context) => 'Hello, world!',
    allAuthors: (root, args, context) => authors,
    author: (root, args, context) => {

    },
    authorByName: (root, args, context) => authors.find((x) => x.name === args.name) || 'NOTFOUND',
  },
  Mutation: {
    addDoc: async () => addDoc(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

exports.handler = server.createHandler(
  {
    cors: {
      origin: '*',
      credentials: true,
    },
  },
);
