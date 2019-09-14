import React from 'react'
import Chess from 'chess.js';
import { PgnParser } from '../../utils'

const chess = new Chess();

console.dir({ chess })

async function handler(e) {
  const files = Array.from(e.target.files)
  let count = 0;

  try {
    for (let file of files) {
      const games = new PgnParser();
      await games.init(file)

      do {
        const game = games.nextGame()
        var okay = game && game.length
        console.log({ game })
        if (okay) {
          chess.load_pgn(game)
          console.log(chess.history().slice(0, 20));
        }
      } while (okay && ++count < 3)
    };
  } catch (e) {
    throw e;
  }
}


export default () => <div className="row">
  <h3 className="row">PGN File Import</h3>
  <label className="row tabbed">Import PGN: &nbsp;&nbsp;
    <input type="file" accept=".pgn" multiple={true} onChange={handler} /></label>
</div>