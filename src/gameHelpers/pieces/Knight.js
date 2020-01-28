/* eslint no-useless-constructor: 0 */
import Piece from './Piece';
import WhiteKnight from '../../assets/images/white_knight.svg';
import BlackKnight from '../../assets/images/black_knight.svg';

export default class Knight extends Piece {
  constructor(...args) {
    super(...args);
    this.image = this.color === 'white' ? WhiteKnight : BlackKnight;
  }

  getValidMoves() {
    return 'get knight valid moves';
  }
}
