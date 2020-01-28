import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import JoinGameButton from '../JoinGameButton/JoinGameButton';
import ChessBoard from '../ChessBoard/ChessBoard';
import { setCurrentGame } from '../../store/actions/gameControllerActions';
import getPlayer from '../../store/actions/playerActions';

class GameView extends Component {
  componentDidMount() {
    const {
      match: {
        params: { game_id },
      },
    } = this.props;
    const { _setCurrentGame } = this.props;
    _setCurrentGame(game_id);
  }

  joinGame() {}

  render() {
    const { board, isGameExist, isGameFull, playerType } = this.props;

    const GameBoard = () => (
      <>
        <JoinGameButton />
        <ChessBoard board={board} />
      </>
    );

    return (
      <div>
        {}
        <Row>
          <Col sm="12" md="8">
            {isGameExist ? <GameBoard /> : <h1>Game doesnt exists</h1>}
          </Col>
          <Col sm="12" md="4">
            <h3>{isGameFull ? 'Full' : 'Not full'}</h3>
            <h3>{playerType}</h3>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.game.board,
  isGameExist: state.gameController.isGameExist,
  isGameFull: state.gameController.game.isFull,
  playerType: state.playerController.player.playerType,
});

const mapDispatchToProps = {
  _setCurrentGame: setCurrentGame,
  _getPlayer: getPlayer,
};

GameView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      game_id: PropTypes.string,
    }),
  }).isRequired,
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())).isRequired,
  isGameExist: PropTypes.bool.isRequired,
  isGameFull: PropTypes.bool.isRequired,
  _setCurrentGame: PropTypes.func.isRequired,
  playerType: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameView);
