import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import GlobalStyle from './assets/styles/GlobalStyle';
import 'typeface-roboto';
import ReduxProvider from './store/index';
import theme from './assets/styles/theme';
import Navbar from './components/Navbar/Navbar';

// Routes
import IndexPage from './components/IndexPage/IndexPage';
import GameView from './components/GameView/GameView';

const StyledContainer = styled(Container)`
  padding-top: 5rem;
`;

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ReduxProvider>
            <Navbar />
            <GlobalStyle />
            <StyledContainer>
              <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/:game_id" component={GameView} />
              </Switch>
            </StyledContainer>
          </ReduxProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
