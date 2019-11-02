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

  await batch.commit();

  return data.length;
};

module.exports = { fetchGames, addOpenings };
