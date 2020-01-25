import axios from 'axios';
import setPlayer from './playerActions';

const createNewGame = () => dispatch => {
  axios
    .get('/game_controller/create_new_game')
    .then(res => {
      dispatch({
        type: 'GAME_CREATE_SUCCESS',
        payload: {
          gameID: res.data.game.id,
        },
      });
      localStorage.setItem('token', res.data.playerID);
    })
    .catch(() => {
      dispatch({
        type: 'GAME_CREATE_FAILED',
      });
    });
};

export const clearCreatingNewGame = () => dispatch => {
  dispatch({ type: 'GAME_CREATE_FAILED' });
};

export const setCurrentGame = gameID => dispatch => {
  axios
    .get(`/game_controller/get_game/${gameID}`)
    .then(res => {
      const { game } = res.data;
      dispatch({
        type: 'SET_GAME',
        payload: {
          game,
        },
      });
    })
    .then(() => {
      dispatch(setPlayer(gameID));
    })
    .catch(() => {
      dispatch({
        type: 'GAME_NOT_EXIST',
      });
    });
};

export const joinGame = gameID => dispatch => {
  axios
    .get(`/game_controller/join_game/${gameID}`)
    .then(res => {
      const { game } = res.data;
      localStorage.setItem('token', res.data.playerID);

      dispatch({
        type: 'SET_GAME',
        payload: {
          game,
        },
      });
    })
    .then(() => {
      dispatch(setPlayer(gameID));
    });
};

export default createNewGame;
