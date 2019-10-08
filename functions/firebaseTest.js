// const Firestore = require('@google-cloud/firestore');

// // Create a new client
// const firestore = new Firestore();

// async function quickstart() {
//   // Obtain a document reference.
//   const document = firestore.doc('posts/intro-to-firestore2');

//   // Enter new data into the document.
//   await document.set({
//     title: 'Welcome to Firestore2',
//     body: 'Hello World2',
//   });
//   console.log('Entered new data into the document');
// }

exports.handler = (event, context, callback) => {
  // quickstart().then(() => callback(null, {
  //   statusCode: 200,
  //   body: "foo",
  // }))
  //   .catch(e => callback(e));
  callback(null, { statusCode: 200, body: "goob" })
}
