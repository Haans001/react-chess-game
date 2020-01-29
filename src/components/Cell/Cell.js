import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import setActiveCell from '../../store/actions/gameActions';

const StyledCell = styled.div`
  background: ${({ theme, isBlack }) =>
    isBlack ? theme.colors.darkYellow : theme.colors.lightYellow};
  cursor: pointer;
  position: relative;
  ${({ isActiveCell }) =>
    isActiveCell
      ? css`
          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: black;
            top: 0;
            left: 0;
          }
        `
      : null};
  img {
    width: 100%;
    height: 100%;
  }
`;

const Cell = ({ x, y, isBlack, piece, active }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActiveCell(x, y));
  };
  return (
    <StyledCell isActiveCell={active} isBlack={isBlack} onClick={handleClick}>
      {piece.color ? <img src={piece.image} alt="" /> : null}
    </StyledCell>
  );
};

Cell.propTypes = {
  active: PropTypes.bool.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isBlack: PropTypes.bool.isRequired,
  piece: PropTypes.shape({
    image: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};

export default Cell;
