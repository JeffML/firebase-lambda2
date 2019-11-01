const openings = require('./scid.js');

const fetchGames = () => null;
const addOpenings = async (_, { start, end }, { admin }) => {
  const times = await admin.firestore()
    .doc('chess/openings/fen/f1')
    .set({ fen: 'f1', SCID: 'scid1', desc: 'howdy' });
    // .set(openings.slice(start, end));
  console.dir(times);
  return times._writeTime._seconds;
};

module.exports = { fetchGames, addOpenings };
