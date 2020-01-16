import axios from 'axios';

const requestCreatingNewGame = () => dispatch => {
  axios
    .get('http://localhost:5000/create_new_game')
    .then(res => {
      dispatch({ type: 'NEW_GAME_REQUEST_SUCCESS' });
    })
    .finally();
};
export default requestCreatingNewGame;
