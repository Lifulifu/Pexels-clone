import React, { useState, useEffect } from 'react';
import './App.scss'

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/private-theming';
import { Container } from '@mui/system';

import TopBar from './components/TopBar';
import SearchInput from './components/SearchInput';
import TrendingList from './components/TrendingList';
import TabList from './components/TabList';

const theme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans",roboto,sans-serif'
  },
})

function App() {

  const [trendingItems, setTrendingItems] = useState<string[]>([]);
  const [tabItems, setTabItems] = useState<string[]>([]);
  const [isScrollOnTop, setIsScrollOnTop] = useState<boolean>(true);

  const onScroll = () => {
    if (window.pageYOffset === 0)
      setIsScrollOnTop(true);
    else
      setIsScrollOnTop(false);
  }

  useEffect(() => {
    setTrendingItems([
      'business', 'food', 'clothing', 'lifu', 'forest'
    ]);
    setTabItems([
      'Home', 'Discover', 'Videas', 'Leaderboard', 'Challenges'
    ]);

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <ThemeProvider theme={theme}>

      <TopBar theme={isScrollOnTop ? 'transparent' : 'contained'} />

      <div className='banner'>
        <div className='banner-bg'></div>
        <Container className='container'>
          <div className='column'>
            <h1>The best free stock photos, royalty free images & videos shared by creators.</h1>
            <SearchInput placeholder='Search for free photos' />
            <TrendingList items={trendingItems} />
          </div>
        </Container>
      </div>

      <TabList items={tabItems} />

      <div style={{ height: '100vh' }}></div>

    </ThemeProvider >
  );
}

export default App;
