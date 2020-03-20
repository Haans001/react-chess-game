const initialState = {
  player: {
    playerType: '',
  },
  userLoaded: false,
  playerError: null,
  socket: null,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_PLAYER': {
      return {
        ...state,
        player: payload,
        userLoaded: true,
      };
    }

    case 'SET_PLAYER_FAILED': {
      return {
        ...state,
        // player: {
        //   playerType: 'iewerv',
        // },
        userLoaded: true,
        playerError: payload.error,
      };
    }

    case 'SET_SOCKET': {
      return {
        ...state,
        socket: payload,
      };
    }

    default: {
      return state;
    }
  }
}
