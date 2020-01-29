import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Card } from 'reactstrap';
import { joinGame } from '../../store/actions/gameControllerActions';

const StyledCard = styled(Card)`
  background: ${({ theme }) => theme.colors.grey};
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

function JoinGameView(props) {
  const dispatch = useDispatch();
  const {
    match: {
      params: { game_id },
    },
  } = props;
  return (
    <>
      <StyledCard className="p-5">
        <h1>Your friend challenges you to a duel</h1>
        <Button
          size="lg"
          color="success"
          onClick={() => dispatch(joinGame(game_id))}
          className="mt-5"
        >
          Join Game
        </Button>
      </StyledCard>
    </>
  );
}

JoinGameView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      game_id: PropTypes.string,
    }),
  }).isRequired,
};

export default withRouter(JoinGameView);
