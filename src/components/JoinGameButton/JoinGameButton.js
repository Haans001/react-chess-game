import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { joinGame } from '../../store/actions/gameControllerActions';

function JoinGameButton(props) {
  const dispatch = useDispatch();
  const isGameFull = useSelector(state => state.gameController.game.isFull);
  const playerType = useSelector(
    state => state.playerController.player.playerType
  );

  const {
    match: {
      params: { game_id },
    },
  } = props;
  return (
    <>
      {!isGameFull && playerType === 'viewer' ? (
        <Button
          color="success"
          onClick={() => dispatch(joinGame(game_id))}
          className="mb-5"
        >
          Join Game
        </Button>
      ) : null}
    </>
  );
}

JoinGameButton.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      game_id: PropTypes.string,
    }),
  }).isRequired,
};

export default withRouter(JoinGameButton);
