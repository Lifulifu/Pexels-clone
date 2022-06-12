import React from 'react';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/private-theming';
import TopBar from './components/TopBar';
import { Container } from '@mui/system';

const theme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans",roboto,sans-serif'
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <div className='banner'>
        <Container className='container'>
          <div className='column'>
            <h1>The best free stock photos, royalty free images & videos shared by creators.</h1>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
