import React, { useState } from 'react';
import fetch from 'node-fetch';
import ApolloClient, { gql } from 'apollo-boost';

const styles = {
  numInput: {
    size: 10,
    width: '10%',
  },
};

const handler = async () => {
  const query = gql`
    mutation {addDoc{name}}
  `;

  const client = new ApolloClient({
    uri: '/.netlify/functions/pgnfen',
    fetch,
  });

  // eslint-disable-next-line no-console
  await client.mutate({ mutation: query }).catch((e) => { console.error(e); });
};


export default () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(100);

  const startEndHandler = (evt) => {
    if (evt.target.name === 'start') {
      setStart(evt.target.value);
    } else {
      setEnd(evt.target.value);
    }
  };

  return (
    <div className="row">
      <h3 className="row">Scid load row</h3>
      <div className="column">
        <label className="tabbed">
          <input type="button" onClick={handler} value="Load Scids" />
        </label>

      </div>
      <div className="column">
        <label className="tabbed">
  Row start:&nbsp;&nbsp;
          <input name="start" type="number" step="100" style={styles.numInput} onChange={startEndHandler} value={start} />
        </label>

      </div>
      <div className="column">
        <label className="tabbed">
Row end:&nbsp;&nbsp;
          <input name="end" type="number" step="100" style={styles.numInput} onChange={startEndHandler} value={end} />
        </label>
      </div>
    </div>
  );
};
