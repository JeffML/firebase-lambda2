import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'


const httpLink = createHttpLink({
  uri: 'https://graphql.fauna.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: "Basic Zm5BRFgtUnc2NEFDQlNzRnkzbGRGMm9FcHd6Z3F1WlExQzR0Q2VHUzpwZ25iYXNlOnNlcnZlcg=="
    }
  }
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
})


exports.handler = (event, context, callback) => {
  const addScidDocs = gql`
  mutation($scid: [OpeningInput]) {
    addOpenings(openings: $scid) {desc}
  }
  `
}