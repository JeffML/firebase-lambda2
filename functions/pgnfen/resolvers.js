const openings = require('./scid.js');


const fetchGames = () => null;
const addOpenings = async (_, { start, end }, { admin }) => {
  const db = admin.firestore();
  const batch = db.batch();
  const fens = db.collection('chess/openings/fen');
  const data = openings.slice(start, end);

  data.forEach((opening) => {
    const id = opening.fen.replace(/\//g, '$');
    const doc = fens.doc(id);
    batch.set(doc, opening);
  });

  const times = await batch.commit();

  //   const times = await admin.firestore()
  //     .doc('chess/openings/fen/f1')
  //     .set({ fen: 'f1', SCID: 'scid1', desc: 'howdy' });
  //     // .set(openings.slice(start, end));
  console.dir(times[0]);
  return times[0]._writeTime._seconds;
};

module.exports = { fetchGames, addOpenings };
git;
