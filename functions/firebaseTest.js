import Firestore from '@google-cloud/firestore';

// Create a new client
const firestore = new Firestore();

async function quickstart() {
  // Obtain a document reference.
  const document = firestore.doc('posts/intro-to-firestore2');

  // Enter new data into the document.
  await document.set({
    title: 'Welcome to Firestore',
    body: 'Hello World',
  });
  console.log('Entered new data into the document');
}

exports.handler = (event, context, callback) => {
  await quickstart();
  callback(null, {
    statusCode: 200,
    body: "foo",
  })
}
