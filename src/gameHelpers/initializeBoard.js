export default function() {
  const cells = [];
  for (let i = 0; i < this.rows; i += 1) {
    cells[i] = [];
    for (let j = 0; j < this.cols; j += 1) {
      // cells[i][j] = <Cell x={i} y={j} isBlack={(i * j) / 8 === 0} />;
      cells[i][j] = new Cell();
    }
  }
}
