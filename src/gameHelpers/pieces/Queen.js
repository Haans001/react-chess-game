/* eslint no-useless-constructor: 0 */
import Piece from './Piece';
import WhiteQueen from '../../assets/images/white_queen.svg';
import BlackQueen from '../../assets/images/black_queen.svg';

export default class Queen extends Piece {
  constructor(...args) {
    super(...args);
    this.image = this.color === 'white' ? WhiteQueen : BlackQueen;
  }

  getValidMoves() {
    return 'get Queen valid moves';
  }
}
