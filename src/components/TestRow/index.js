import React from 'react';
import fetch from 'node-fetch';
// import gql from 'graphql-tag';

const handler = () => {
  const URL = 'http://localhost:8888';
  const query = `
    mutation {addDoc{name}}
  `;

  const json = { operationName: null, variables: {}, query: 'mutation { addDoc {   name  }}' };

  return fetch(`${URL}/.netlify/functions/pgnfen`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(json),
  });
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
