const setActiveCell = (x, y) => (dispatch, getState) => {
  const {
    game: { board, activeCell },
  } = getState();
  const newBoard = JSON.parse(JSON.stringify(board));

  newBoard[x][y].active = true;
  let cell = newBoard[x][y];

  if (
    Object.prototype.hasOwnProperty.call(activeCell, 'x') &&
    activeCell !== board[x][y]
  ) {
    newBoard[activeCell.x][activeCell.y].active = false;
  } else if (activeCell === board[x][y] && board[x][y].active) {
    newBoard[x][y].active = false;
    cell = {};
  }

  dispatch({
    type: 'SET_ACTIVE_CELL',
    payload: {
      cell,
    },
  });

  dispatch({
    type: 'SET_BOARD',
    payload: {
      board: newBoard,
    },
  });
};

export default setActiveCell;
