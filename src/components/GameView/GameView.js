import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import ChessBoard from '../ChessBoard/ChessBoard';

export class GameView extends Component {
  constructor(props) {
    super(props);
    this.getCurrentGame = this.getCurrentGame.bind(this);
    this.state = {
      board: null,
    };
  }

  componentDidMount() {
    this.getCurrentGame();
  }

  getGames() {
    axios.get('/game_controller/get_games').then(res => console.log(res));
  }

  getCurrentGame() {
    const {
      match: {
        params: { game_id },
      },
    } = this.props;
    axios
      .get(`/game_controller/get_game/${game_id}`)
      .then(res =>
        this.setState({
          board: res.data.game.board,
        })
      )
      .catch(err => console.log(err.response.data));
  }

  render() {
    const { board } = this.state;
    return (
      <div>
        {}
        <Row>
          <Col sm="12" md="8">
            <ChessBoard board={board} />
          </Col>
          <Col sm="12" md="4">
            <Button onClick={this.getGames}>Get Games</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

GameView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      game_id: PropTypes.string,
    }),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameView);
