class PgnParser {
  index = 0
  reader = null

  async init(file) {
    return new Promise((resolve, reject) => {
      this.reader = new FileReader();

      this.reader.onload = (event) => {
        const file = event.target.result;
        this.allLines = file.split(/\r\n|\n/);
        resolve()
      };

      this.reader.onerror = (event) => {
        reject(event.target.error.name);
      };

      this.reader.readAsText(file);
    })
  }

  nextGame() {
    const pgnGame = [];
    for (; this.index < this.allLines.length; this.index++) {
      const line = this.allLines[this.index];
      if (/^\s*$/.test(line)) {
        continue;
      }
      pgnGame.push(line);
      if (/^.*?(1\/2-1\/2|1-0|0-1)\s*$/.test(line)) {
        this.index++
        break;
      }
    }
    return (pgnGame.join('\n'))
  }

  *gen() {
    yield 1;
    yield 2;
  }

}

export { PgnParser }