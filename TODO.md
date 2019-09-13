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
  Store headers needed, store moves as returned by history()
## import and index [SCID](http://watfordchessclub.org/images/downloads/scid.eco)
  parse out:
    * SCID, description, moves
    * convert moves to history via chess.js
    * store
## indexes
  term indexes on Player names, color, ECO, descriptive opening
  find & store all matching [SCID](http://watfordchessclub.org/images/downloads/scid.eco) up to move 18
  value indexes on date
  
