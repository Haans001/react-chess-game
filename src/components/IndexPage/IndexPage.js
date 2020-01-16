import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.startNewGame = this.startNewGame.bind(this);
    this.state = {
      newGameRequestSuccess: false,
      newGameId: null,
    };
  }

  componentWillUnmount() {
    this.setState({
      newGameRequestSuccess: false,
    });
  }

  startNewGame() {
    axios
      .get('/game_controller/create_new_game')
      .then(res => {
        console.log(res);
        this.setState({
          newGameRequestSuccess: true,
          newGameId: res.data.id,
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          newGameRequestSuccess: false,
        });
      });
  }

  render() {
    const { newGameRequestSuccess, newGameId } = this.state;
    return (
      <div>
        <Button onClick={this.startNewGame} color="success">
          Play with friend!
        </Button>
        {newGameRequestSuccess ? <Redirect to={newGameId} /> : null}
      </div>
    );
  }
}
const mapDispatchToProps = {
  // requestCreatingNewGame,
};
const mapStateToProps = state => ({
  // newGameRequestSuccess: state.apiGameController.newGameRequestSuccess,
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
