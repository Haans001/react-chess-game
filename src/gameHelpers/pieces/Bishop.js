/* eslint no-useless-constructor: 0 */
import Piece from './Piece';
import WhiteBishop from '../../assets/images/white_bishop.svg';
import BlackBishop from '../../assets/images/black_bishop.svg';

export default class Bishop extends Piece {
  constructor(...args) {
    super(...args);
    this.image = this.color === 'white' ? WhiteBishop : BlackBishop;
  }

  getValidMoves() {
    return 'get Bishop valid moves';
  }
}
