import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import ChessBoard from '../ChessBoard/ChessBoard';

function GameView({ isGameFull, playerType }) {
  return (
    <div>
      {}
      <Row>
        <Col sm="12" md="8">
          <ChessBoard />
        </Col>
        <Col sm="12" md="4">
          <h3>{isGameFull ? 'Full' : 'Not full'}</h3>
          <h3>{playerType}</h3>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = state => ({
  isGameFull: state.gameController.isFull,
  playerType: state.playerController.player.playerType,
});

GameView.propTypes = {
  isGameFull: PropTypes.bool.isRequired,
  playerType: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(GameView);
