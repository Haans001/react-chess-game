import { combineReducers } from 'redux';
import gameController from './gameControllerReducer';
import playerController from './playerReducer';

export default combineReducers({
  gameController,
  playerController,
});
