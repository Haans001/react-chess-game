const initialState = {
  gameCreateSuccess: false,
  gameID: null,
  isGameExist: true,
  isFull: false,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case 'GAME_CREATE_SUCCESS': {
      return {
        ...state,
        gameID: payload.gameID,
        gameCreateSuccess: true,
        isGameExist: true,
      };
    }
    case 'SET_GAME': {
      return {
        ...state,
        isGameExist: true,
        isFull: payload.game.isFull,
        gameID: payload.game.id,
      };
    }
    case 'GAME_CREATE_FAILED': {
      return {
        ...state,
        gameCreateSuccess: false,
      };
    }
    case 'GAME_NOT_EXIST': {
      return {
        ...state,
        isGameExist: false,
      };
    }
    default:
      return state;
  }
}
