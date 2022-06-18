import React, { useState, useEffect } from 'react';
import './App.scss'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import TopBar from './components/TopBar';
import SearchInput from './components/SearchInput';
import TrendingList from './components/TrendingList';
import TabList, { TabListItem } from './components/TabList';
import Gallery from './components/Gallery';
import IMAGE_URLS from './assets/images-url.json';

const theme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans",roboto,sans-serif'
  },
})

const sortbyItems = ['Hotest', 'Newest'];

function App() {

  const [trendingItems, setTrendingItems] = useState<string[]>([]);
  const [tabItems, setTabItems] = useState<TabListItem[]>([]);
  const [sortby, setSortby] = useState<string>(sortbyItems[0]);

  const onTabItemChanged = (tabName: string) => {
    setTabItems(tabItems.map((item) => {
      if (item.name === tabName)
        item.isActive = true;
      else
        item.isActive = false;
      return item
    }))
  }

  useEffect(() => {
    setTrendingItems([
      'business', 'food', 'clothing', 'lifu', 'forest'
    ]);
    setTabItems([
      { name: 'Home', isActive: true },
      { name: 'Discover', isActive: false },
      { name: 'Videos', isActive: false },
      { name: 'Leaderboard', isActive: false },
      { name: 'Challenges', isActive: false },
    ]);
  }, [])

  return (
    <ThemeProvider theme={theme}>

      <TopBar />

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

      <TabList items={tabItems} onChange={onTabItemChanged} />

      <Container className='container'>

        <div className='h2-and-sortby'>
          <h2>Free Stock Photos</h2>
          <Select displayEmpty value={sortby} onChange={(e) => setSortby(e.target.value)}>
            {
              sortbyItems.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))
            }
          </Select>
        </div>

        <Gallery images={IMAGE_URLS.urls} />

      </Container>
    </ThemeProvider>
  );
}

export default App;
