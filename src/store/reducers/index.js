import { combineReducers } from 'redux';
import gameController from './gameControllerReducer';
import playerController from './playerReducer';
import game from './gameReducer';

export default combineReducers({
  gameController,
  playerController,
  game,
});
