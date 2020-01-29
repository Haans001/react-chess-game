import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GameView from '../GameView/GameView';
import JoinGameView from '../JoinGameView/JoinGameView';
import { setCurrentGame } from '../../store/actions/gameControllerActions';
import UserPreload from '../UserPreload/UserPreload';

class GamePage extends Component {
  componentDidMount() {
    const {
      match: {
        params: { game_id },
      },
    } = this.props;
    const { _setCurrentGame } = this.props;
    _setCurrentGame(game_id);
  }

  render() {
    const { isGameFull, playerType, isGameExist } = this.props;
    const {
      match: {
        params: { game_id },
      },
    } = this.props;
    let gameState;

    const GameExist = ({ children }) => (
      <>{isGameExist ? <>{children}</> : <h1>Game Doesnt exists</h1>}</>
    );

    if (!isGameFull && !playerType) gameState = <JoinGameView />;
    // else if (!isGameFull && playerType === 'xd')
    //   gameState = <h1>Invite to game</h1>; Here i will set InviteView component
    else gameState = <GameView />;

    return (
      <div>
        <GameExist>
          <UserPreload gameID={game_id}>{gameState}</UserPreload>
        </GameExist>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isGameFull: state.gameController.isFull,
  playerType: state.playerController.player.playerType,
  isGameExist: state.gameController.isGameExist,
});

const mapDispatchToProps = {
  _setCurrentGame: setCurrentGame,
};

GamePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      game_id: PropTypes.string,
    }),
  }).isRequired,
  isGameExist: PropTypes.bool.isRequired,
  isGameFull: PropTypes.bool.isRequired,
  _setCurrentGame: PropTypes.func.isRequired,
  playerType: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
