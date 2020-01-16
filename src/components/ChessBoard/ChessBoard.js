import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cell from '../Cell/Cell';

const StyledBoard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: ${({ height }) => `${height}px`};
`;

export default class ChessBoard extends Component {
  constructor(props) {
    super(props);
    this.rows = 8;
    this.cols = 8;
    this.board = createRef();
    this.state = {
      boardHeight: 0,
    };
    this.setBoardHeight = this.setBoardHeight.bind(this);
  }

  componentDidMount() {
    this.setBoardHeight();
    window.addEventListener('resize', this.setBoardHeight);
  }

  setBoardHeight() {
    this.setState({
      boardHeight: this.board.current.clientWidth,
    });
  }

  render() {
    const { boardHeight } = this.state;
    const { board } = this.props;
    return (
      <StyledBoard ref={this.board} height={boardHeight}>
        {board &&
          board.map(row =>
            row.map((cell, index) => <Cell key={index} {...cell} />)
          )}
      </StyledBoard>
    );
  }
}

ChessBoard.propTypes = {
  board: PropTypes.arrayOf().isRequired,
};
