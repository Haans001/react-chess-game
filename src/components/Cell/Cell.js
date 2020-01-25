import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const StyledCell = styled.div`
  background: ${({ theme, isBlack }) =>
    isBlack ? theme.colors.darkYellow : theme.colors.lightYellow};
`;

const Cell = ({ x, y, isBlack }) => {
  return <StyledCell isBlack={isBlack}>{`${x},${y}`}</StyledCell>;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isBlack: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
