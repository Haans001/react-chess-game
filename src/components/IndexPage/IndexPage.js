import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import createNewGame, {
  clearCreatingNewGame,
} from '../../store/actions/gameControllerActions';

class IndexPage extends Component {
  componentWillUnmount() {
    const { _clearCreatingNewGame } = this.props;
    _clearCreatingNewGame();
  }

  render() {
    const { _createNewGame, gameCreateSuccess, gameID } = this.props;
    return (
      <div>
        <Button onClick={_createNewGame} color="success">
          Play with friend!
        </Button>
        {gameCreateSuccess ? <Redirect to={`/${gameID}`} /> : null}
      </div>
    );
  }
}
const mapDispatchToProps = {
  _createNewGame: createNewGame,
  _clearCreatingNewGame: clearCreatingNewGame,
};
const mapStateToProps = state => ({
  gameCreateSuccess: state.gameController.gameCreateSuccess,
  gameID: state.gameController.gameID,
});

IndexPage.propTypes = {
  _createNewGame: PropTypes.func.isRequired,
  _clearCreatingNewGame: PropTypes.func.isRequired,
  gameCreateSuccess: PropTypes.bool.isRequired,
  gameID: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
