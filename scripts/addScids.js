import fetch from 'node-fetch';
import scids from './scid';

const URL = 'http://localhost:9000/';
// const URL = '/'

// Function using fetch to POST to our API endpoint
function mutate() {
  const sliced = scids.slice(10000, 11000);
  // console.log({ sliced })
  const data = JSON.stringify(sliced);

  return fetch(`${URL}.netlify/functions/add-scids`, {
    method: 'POST',
    body: data,
  });
}

mutate()
  .then((response) => response.json())
  .then((response) => console.log('Result count', response.data.addOpenings.length))
  .catch((e) => console.error('Error', e));
