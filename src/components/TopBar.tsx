import React from 'react'
import './TopBar.scss'

import { Container } from '@mui/system'

import LogoButton from './LogoButton';
import TopBarItem from './TopBarItem';
import SearchInput from './SearchInput';

import { MdExpandMore } from 'react-icons/md'
import { FiMoreHorizontal } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'

interface Props {
  theme: string,
}

export default function TopBar({ theme }: Props) {
  return (
    <div className='topbar' data-theme={theme}>
      <Container className='container' maxWidth='xl'>

        <span className='logo'>
          <LogoButton />
        </span>

        <span className='search'>
          <SearchInput placeholder='Search for free photos' />
        </span>

        <span className='secondary-buttons'>
          <TopBarItem variant='text' endIcon={<MdExpandMore />}>Explore</TopBarItem>
          <TopBarItem variant='text'>Liscense</TopBarItem>
          <TopBarItem variant='text'>Upload</TopBarItem>
          <TopBarItem variant='text'><FiMoreHorizontal /></TopBarItem>
        </span>

        <span className='primary-buttons'>
          <TopBarItem variant='contained'>Join</TopBarItem>
          <TopBarItem className='menu-button' variant='text'><AiOutlineMenu size={28} /></TopBarItem>
        </span>

      </Container>
    </div>
  )
}
