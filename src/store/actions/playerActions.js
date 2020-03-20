import axios from 'axios';
import createClientSocket from '../../assets/sockets/createClientSocket';

const setPlayer = gameID => dispatch => {
  const token = localStorage.getItem('token');

  axios
    .get(`/game_controller/get_player/${token}/${gameID}`)
    .then(res => {
      dispatch({ type: 'SET_PLAYER', payload: res.data });
    })
    .catch(err => dispatch({ type: 'SET_PLAYER_FAILED', payload: err }));
};

export const setSocket = gameID => dispatch => {
  createClientSocket(gameID, dispatch).then(socket => {
    dispatch({ type: 'SET_SOCKET', payload: socket });
  });
};

export default setPlayer;
