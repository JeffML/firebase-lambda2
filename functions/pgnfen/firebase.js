// eslint-disable-next-line import/no-extraneous-dependencies
const admin = require('firebase-admin');

const credential = require('./pgnfen2-0dcc7c57af09.json');


admin.initializeApp({
  credential: admin.credential.cert(credential),
});


exports.admin = admin;
