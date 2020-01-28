import { store } from '../../store/index';

export default class Piece {
  constructor(color) {
    this.color = color;
  }

  getBoard() {
    return store.getState();
  }
}
