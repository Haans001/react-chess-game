/* eslint no-useless-constructor: 0 */
import Piece from './Piece';
import WhiteRook from '../../assets/images/white_rook.svg';
import BlackRook from '../../assets/images/black_rook.svg';

export default class Rook extends Piece {
  constructor(...args) {
    super(...args);
    this.image = this.color === 'white' ? WhiteRook : BlackRook;
  }

  getValidMoves() {
    return 'get rook valid moves';
  }
}
