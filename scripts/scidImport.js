import ScidParser from '../src/utils/ScidParser.js'

const parser = new ScidParser()

parser.init('./scid.eco')
const openings = parser.openings();
console.log(openings);