import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'reactstrap';

const StyledNavbar = styled.nav`
  background: ${({ theme }) => theme.colors.grey};
  z-index: 1000;
  width: 100%;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Navbar = () => (
  <StyledNavbar>
    <Container fluid="xl">
      <Link to="/">
        <h2>Chess Game</h2>
      </Link>
    </Container>
  </StyledNavbar>
);

export default Navbar;
