import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';

const StyledContainer = styled(Container)`
  background: #130f40;
  height: 100vh;
  color: white;
`;
function App() {
  return (
    <div className="app">
      <StyledContainer xl></StyledContainer>
    </div>
  );
}

export default App;
