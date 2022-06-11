import React from 'react';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/private-theming';
import TopBar from './components/TopBar';

const theme = createTheme({
  typography: {
    fontFamily: 'Plus Jakarta Sans'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <div className='banner'></div>
    </ThemeProvider>
  );
}

export default App;
