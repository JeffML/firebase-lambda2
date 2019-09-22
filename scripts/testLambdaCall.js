import fetch from 'node-fetch'
const URL = 'http://localhost:9000/'

// Function using fetch to POST to our API endpoint
function query(data) {
  return fetch(`${URL}.netlify/functions/all-opening-fens`, {
    method: 'GET'
  })
    .then(response => console.log("text=", response.text()))
    .then(response => response.json())
}

query()
  .then(response => console.log('Openings', response))
  .catch(e => console.error(e))