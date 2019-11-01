import React, { useState } from 'react';
import fetch from 'node-fetch';
import ApolloClient, { gql } from 'apollo-boost';

const styles = {
  numInput: {
    size: 10,
    width: '10%',
  },
};

const client = new ApolloClient({
  uri: '/.netlify/functions/pgnfen',
  fetch,
});

export default () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(100);

  const clickHandler = async () => {
    const mutation = gql`
     mutation {addOpenings({start, end})}
   `;

    // // eslint-disable-next-line no-console
    // await client.mutate({ mutation }).catch((e) => { console.error(e); });
  };

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
          <input type="button" onClick={clickHandler} value="Load Scids" />
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
