const initialState = {
  activeCell: {},
  board: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_ACTIVE_CELL': {
      return {
        ...state,
        activeCell: payload.cell,
      };
    }

    case 'SET_BOARD': {
      return {
        ...state,
        board: payload.board,
      };
    }
    default:
      return state;
  }
}
