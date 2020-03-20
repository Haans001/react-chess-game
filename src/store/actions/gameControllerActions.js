import axios from 'axios';
import io from 'socket.io-client';
import setPlayer from './playerActions';
import createPiece from '../../gameHelpers/pieces/createPiece';

const createNewGame = () => dispatch => {
  axios
    .get('/game_controller/create_new_game')
    .then(res => {
      dispatch({
        type: 'GAME_CREATE_SUCCESS',
        payload: {
          gameID: res.data.gameID,
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
      const board = game.board.map(row =>
        row.map(cell => {
          return {
            ...cell,
            piece: createPiece(cell.piece),
            active: false,
          };
        })
      );

      dispatch({
        type: 'SET_GAME',
        payload: {
          game,
        },
      });

      dispatch({
        type: 'SET_BOARD',
        payload: {
          board,
        },
      });
    })
    .catch(() => {
      dispatch({
        type: 'GAME_NOT_EXIST',
      });
    });
};

export const joinGame = gameID => (dispatch, getState) => {
  const { socket } = getState().playerController;
  axios
    .get(`/game_controller/join_game/${gameID}`)
    .then(res => {
      const { game } = res.data;
      localStorage.setItem('token', res.data.playerID);
      socket.emit('join_game');
      dispatch({
        type: 'SET_GAME',
        payload: {
          game,
        },
      });
    })
    .catch(err => console.log(err));
};

export default createNewGame;
