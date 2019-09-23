import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
import fetch from 'node-fetch'


const URL = 'https://graphql.fauna.com/graphql'

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

  const addScidDocs = gql`
  mutation($scid: [OpeningInput]) {
    addOpenings(openings: $scid) {desc}
  }
  `

  const json = JSON.parse(event.body)

  client.mutate({
    mutation: addScidDocs,
    variables: { scid: json },
  })
    .then(results => {
      console.log({ results })
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(results),
      })
    })
    .catch(e => callback(e.toString()))

  // callback(null, { statusCode: 200, body: event.body })
}