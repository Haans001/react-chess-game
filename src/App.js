import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import GlobalStyle from './assets/styles/GlobalStyle';
import 'typeface-roboto';

const StyledContainer = styled(Container)`
  background: #130f40;
  height: 100vh;
  color: white;
`;
function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <StyledContainer>
        <h1>Hello</h1>
      </StyledContainer>
    </div>
  );
}

export default App;
