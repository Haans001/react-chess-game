import axios from 'axios';

const setPlayer = gameID => dispatch => {
  const token = localStorage.getItem('token');

  axios
    .get(`/game_controller/get_player/${token}/${gameID}`)
    .then(res => {
      dispatch({ type: 'SET_PLAYER', payload: res.data });
    })
    .catch(err => dispatch({ type: 'SET_PLAYER_FAILED', payload: err }));
};

export default setPlayer;
