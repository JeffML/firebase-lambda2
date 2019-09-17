import Chess from 'chess.js';
import fs from 'fs';

class ScidParser {
  reader = null

  init(file) {
    this.allLines = fs.readFileSync(file, 'UTF-8')
      .split(/\r\n|\n/)
      .filter(line => !line.startsWith('#')
        && !/^\s*$/.test(line)
        && !line.includes('Start position'))
  }

  openings() {
    const openings = [];
    const pgn = new RegExp(/\s+(.*)\s+\*/)
    const ecoDesc = new RegExp(/([A-E]\d{2}[a-z]?)\s+(".*")/.source + '(' + pgn.source + ')?')

    for (let index = 0; index < this.allLines.length; index++) {
      let line = this.allLines[index];
      // console.log({ line })
      let [_, SCID, desc, moves] = line.match(ecoDesc)
      if (!moves) {
        line = this.allLines[++index]
        while (!line.endsWith('*')) {
          line += this.allLines[++index]
        }
        try {
          moves = line.match(pgn)[1]
        } catch (e) {
          throw `error on line ${line}`
        }
      }
      const fen = this.getFen(moves)
      openings.push({ SCID, desc, fen });
      // if (index > 100) break;
    }
    return openings
  }

  getFen(moves) {
    const chess = Chess.Chess()
    // console.log({ moves })
    const plies = moves.split(/\s/).map(move => {
      const matches = move.match(/(?:\d{1,3}\.)?(.*)/)
      // console.log({ move, matches })
      return matches[1]
    })

    plies.forEach(move => {
      chess.move(move);
    });

    return chess.fen()
  }
}

export default ScidParser 