import ScidParser from '../src/utils/ScidParser.js'

const parser = new ScidParser()

parser.init('./scripts/scid.eco')
const openings = parser.openings();
console.dir(openings, { depth: 5, maxArrayLength: 20000 });