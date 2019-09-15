import React from 'react'
import Chess from 'chess.js';
import { PgnParser, getFens } from '../../utils'
import { store } from '../../utils/api'

const chess = new Chess();

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

        if (okay) {
          chess.load_pgn(game)
          const halfMoves = chess.history().slice(0, 35);
          const fens = getFens(halfMoves)
          store({ headers: chess.header(), fens, game })
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