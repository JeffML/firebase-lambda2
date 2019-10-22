const admin = require('./firebaseTest').admin

const foo = async () => {
  await admin
    .firestore()
    .doc("posts/new-one")
    .set({ title: "Hi", body: "there2." })
}

exports.handler = async (event, context, callback) => {
  await foo().catch(e => { throw e })
  return { statusCode: 200, body: "okay" }
}

