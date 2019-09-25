import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
import fetch from 'node-fetch'
import authorization from './authorization'

const URL = 'https://graphql.fauna.com/graphql'

const client = new ApolloClient({
  uri: URL,
  fetch,
  request: operation => {
    operation.setContext({
      headers: {
        authorization
      },
    });
  },
})


exports.handler = (event, context, callback) => {

  const addGameDocs = gql`
  mutation($games: [GameInput]) {
    addGames(games: $games) {header {result}}
  }
  `

  const json = JSON.parse(event.body)

  client.mutate({
    mutation: addGameDocs,
    variables: { games: json },
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