import ApolloClient from 'apollo-boost';

import gql from 'graphql-tag'
import fetch from 'node-fetch'

const URL = 'https://graphql.fauna.com/graphql'
// const URL = 'http://localhost:9000/'  //FIXME

const client = new ApolloClient({
  uri: URL,
  fetch,
  request: operation => {
    operation.setContext({
      headers: {
        authorization: "Basic Zm5BRFgtUnc2NEFDQlNzRnkzbGRGMm9FcHd6Z3F1WlExQzR0Q2VHUzpwZ25iYXNlOnNlcnZlcg=="
      },
    });
  },
})


exports.handler = (event, context, callback) => {
  const allOpeningFens = gql`    
  query openings {
      allOpenings {
        data {fen}
      }
    }
  `;


  client.query({ query: allOpeningFens })
    .then(results => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(results),
      })
    })
    .catch(e => callback(e))
}