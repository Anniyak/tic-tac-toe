class TicTacToe {
  field;
  current_symbol;
  winner;

  constructor() {
    this.field = Array(3).fill(null).map(el => Array(3).fill(null));
    this.current_symbol = 'x';
    this.winner = null;
  }

  getCurrentPlayerSymbol() {
    return this.current_symbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] == null) {
      this.field[rowIndex][columnIndex] = this.current_symbol;
      this.current_symbol = this.current_symbol === 'x' ? 'o' : 'x';
      //calculate Winner
      if (this.field[0][0] === this.field[0][1] && this.field[0][1] === this.field[0][2]) this.winner = this.field[0][0];
      if (this.field[1][0] === this.field[1][1] && this.field[1][1] === this.field[1][2]) this.winner = this.field[1][0];
      if (this.field[2][0] === this.field[2][1] && this.field[2][1] === this.field[2][2]) this.winner = this.field[2][0];
      if (this.field[0][0] === this.field[1][0] && this.field[1][0] === this.field[2][0]) this.winner = this.field[0][0];
      if (this.field[0][1] === this.field[1][1] && this.field[1][1] === this.field[2][1]) this.winner = this.field[0][1];
      if (this.field[0][2] === this.field[1][2] && this.field[1][2] === this.field[2][2]) this.winner = this.field[0][2];
      if (this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2]) this.winner = this.field[0][0];
      if (this.field[2][0] === this.field[1][1] && this.field[1][1] === this.field[0][2]) this.winner = this.field[2][0];
    }
  }

  isFinished() {
    return this.winner !== null || this.noMoreTurns();

  }

  getWinner() {
    return this.winner;
  }

  noMoreTurns() {
    return this.field.filter((row) => row.filter(item => item === null).length !== 0).length === 0;
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex] || null;

  }
}

module.exports = TicTacToe;
