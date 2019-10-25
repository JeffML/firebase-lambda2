import admin from '../functions/pgnfen/firebase';

const foo = async () => {
  await admin.firestore()
    .doc('posts/new-three')
    .set({
      title: 'Bye',
      body: 'bye.',
    });
};

// eslint-disable-next-line no-unused-vars
exports.handler = async (event, context, callback) => {
  await foo().catch((e) => {
    throw e;
  });
  return {
    statusCode: 200,
    body: 'okay',
  };
};