const initialState = {
  player: {
    playerType: '',
  },
  playerError: null,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_PLAYER': {
      return {
        ...state,
        player: payload,
      };
    }

    case 'SET_PLAYER_FAILED': {
      return {
        ...state,
        player: {
          playerType: 'viewer',
        },
        playerError: payload.error,
      };
    }

    default: {
      return state;
    }
  }
}
