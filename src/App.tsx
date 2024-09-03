import { defaultTheme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import globalStyles from './global-styles/index.module.scss';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import {
  AppBody,
  AppFooter,
  AppHeader,
  AppContainerStyled
} from './domain/components';

const GlobalStyles = createGlobalStyle`${globalStyles}`;
function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <AppContainerStyled>
          <BrowserRouter>
            <AppHeader />
            <AppBody />
            <AppFooter />
          </BrowserRouter>
        </AppContainerStyled>
      </ThemeProvider>
    </>
  );
}

export default App;
