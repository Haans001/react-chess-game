const initialState = {
  newGameRequestSuccess: false,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case 'NEW_GAME_REQUEST_SUCCESS': {
      return {
        ...state,
        newGameRequestSuccess: true,
      };
    }
    default:
      return state;
  }
}
