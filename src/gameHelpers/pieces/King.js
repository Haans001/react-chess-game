/* eslint no-useless-constructor: 0 */
import Piece from './Piece';
import WhiteKing from '../../assets/images/white_king.svg';
import BlackKing from '../../assets/images/black_king.svg';

export default class King extends Piece {
  constructor(...args) {
    super(...args);
    this.image = this.color === 'white' ? WhiteKing : BlackKing;
  }

  getValidMoves() {
    return 'get King valid moves';
  }
}
