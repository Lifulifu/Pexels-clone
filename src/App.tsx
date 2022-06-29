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
import ImageGallery from './components/ImageGallery';
import { getRandomImageDatas, ImageData } from './utils/util';


const theme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans",roboto,sans-serif'
  },
})

const sortbyItems = ['Hotest', 'Newest'];
const MORE_IMAGES_COUNT = 10;

function App() {

  const [trendingItems, setTrendingItems] = useState<string[]>([]);
  const [tabItems, setTabItems] = useState<TabListItem[]>([]);
  const [sortby, setSortby] = useState<string>(sortbyItems[0]);
  const [imageDatas, setImageDatas] = useState<ImageData[]>([]);
  const [isScrollOnTop, setIsScrollOnTop] = useState<boolean>(true);

  const onTabItemChanged = (tabName: string) => {
    setTabItems(tabItems.map((item) => {
      if (item.name === tabName)
        item.isActive = true;
      else
        item.isActive = false;
      return item
    }))
  }

  const onScroll = () => {
    if (window.pageYOffset === 0)
      setIsScrollOnTop(true);
    else
      setIsScrollOnTop(false);
  }

  const extendImageDatas = (n: number) => {
    setImageDatas((old) => old.concat(getRandomImageDatas(n)))
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

    extendImageDatas(MORE_IMAGES_COUNT);

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

        <ImageGallery imageDatas={imageDatas} />

      </Container>
    </ThemeProvider>
  );
}

export default App;
