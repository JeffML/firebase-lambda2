import React from 'react';
import fetch from 'node-fetch';
import ApolloClient, { gql } from 'apollo-boost';

const handler = async () => {
  const URL = 'http://localhost:8888';

  const query = gql`
    mutation {addDoc{name}}
  `;

  const client = new ApolloClient({
    uri: `${URL}/.netlify/functions/pgnfen`,
    fetch,
  });

  // eslint-disable-next-line no-console
  await client.mutate({ mutation: query }).catch((e) => { console.error(e); });
};


export default () => (
  <div className="row">
    <h3 className="row">Test row</h3>
    <label className="row tabbed">
Test: &nbsp;&nbsp;
      <input type="button" onClick={handler} />

    </label>
  </div>
);
