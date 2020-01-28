/* eslint no-useless-constructor: 0 */
import Piece from './Piece';
import WhitePawn from '../../assets/images/white_pawn.svg';
import BlackPawn from '../../assets/images/black_pawn.svg';

export default class Queen extends Piece {
  constructor(...args) {
    super(...args);
    this.image = this.color === 'white' ? WhitePawn : BlackPawn;
  }

  getValidMoves() {
    return 'get Pawn valid moves';
  }
}
