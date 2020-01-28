import Rook from './Rook';
import Bishop from './Bishop';
import Knight from './Knight';
import Queen from './Queen';
import King from './King';
import Pawn from './Pawn';

export default function createPiece(_piece) {
  const { color, piece } = _piece;
  switch (piece) {
    case 'rook':
      return new Rook(color);
    case 'bishop':
      return new Bishop(color);
    case 'knight':
      return new Knight(color);
    case 'queen':
      return new Queen(color);
    case 'king':
      return new King(color);
    case 'pawn':
      return new Pawn(color);

    default:
      return _piece;
  }
}
