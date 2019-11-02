/* eslint-disable no-alert */
import React, { useState } from 'react';
import fetch from 'node-fetch';
import ApolloClient, { gql } from 'apollo-boost';

const styles = {
  numInput: {
    size: 10,
    width: '16%',
  },
};

const client = new ApolloClient({
  uri: '/.netlify/functions/pgnfen',
  fetch,
});

export default () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(500);

  const clickHandler = async () => {
    const mutation = gql`mutation {
      addOpenings(start: ${start}, end: ${end})
    }`;

    // eslint-disable-next-line no-console
    const count = await client.mutate({ mutation })
      .catch((e) => { window.alert(e); });
    // console.dir(count);
    window.alert(`${count.data.addOpenings} documents written`);
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
          <input name="start" type="number" step="500" style={styles.numInput} onChange={startEndHandler} value={start} />
        </label>

      </div>
      <div className="column">
        <label className="tabbed">
Row end:&nbsp;&nbsp;
          <input name="end" type="number" step="500" style={styles.numInput} onChange={startEndHandler} value={end} />
        </label>
      </div>
    </div>
  );
};
