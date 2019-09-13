# Phase 1
## read pgn
  * file dialog
  * import file(s)
    * easiest:
      * chess.js parses file(s)
      * send x # of game objects to lambda store() function at a time
## store pgn
  Use chess.js to parse/validate the PGNs
  headers() and history() will return meta info and moves, respectfully
  Store headers needed
  store moves as returned by history()
  for first 18 moves, generate FEN
## import and index [SCID](http://watfordchessclub.org/images/downloads/scid.eco)
  parse out:
    * SCID, description, moves
    * parse moves via chess.js
    * generate FEN & store
## indexes
  term indexes on Player names, color, ECO, descriptive opening
  value indexes on date
  index FENS for first 18 moves
## search
### find opening of game
  for each FEN in descending move order
    * look for FEN in SCID db
    * when found, stop
### find all games with opening
  find 18 move game FENs, both plies
  while not found, decrement and repeat
### find all descriptions for opening
  Similar to above

  
