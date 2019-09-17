import Chess from 'chess.js';
import fs from 'fs';

class ScidParser {
  reader = null

  init(file) {
    this.allLines = fs.readFileSync(file, 'UTF-8')
      .split(/\r\n|\n/)
      .filter(line => !line.startsWith('#') && !/^\s*$/.test(line))
  }

  openings() {
    const openings = [];
    const pgnPatt = /\s+(.*)\s+\*/
    const pgn = new RegExp(pgnPatt)
    const ecoDesc = new RegExp(/([A-E]\d{2}[a-z]?)\s+(".*")/ + pgnPatt)

    for (let index = 0; this.index < this.allLines.length; this.index++) {
      const line = this.allLines[index];
      let [_, SCID, desc, moves] = ecoDesc.match(line)
      moves = moves || pgn.match(line)[1]
      fen = this.getFen(moves)
      openings.push({ SCID, desc, fen });
    }
    return (openings.join('\n'))
  }

  getFen(moves) {
    const chess = new Chess();
    const plies = moves.split(/\s/).map(move => /\d{1,3}\.(.*?)\s/.match(move))

    plies.forEach(move => {
      chess.move(move);
    });

    return chess.fen()
  }
}

export default ScidParser 