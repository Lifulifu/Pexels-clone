import React from 'react'

import { Container } from '@mui/system'
import { Button } from '@mui/material'
import { Typography } from '@mui/material';

import LogoButton from './LogoButton';
import TopBarItem from './TopBarItem';

import { MdExpandMore } from 'react-icons/md'
import { FiMoreHorizontal } from 'react-icons/fi'

export default function TopBar() {
  return (
    <div className='topbar'>
      <Container className='container' maxWidth='lg'>
        <span className='left-items'>
          <LogoButton />
        </span>
        <span className='right-items'>
          <TopBarItem secondary endIcon={<MdExpandMore />}>Explore</TopBarItem>
          <TopBarItem secondary>Liscense</TopBarItem>
          <TopBarItem secondary>Upload</TopBarItem>
          <TopBarItem secondary><FiMoreHorizontal /></TopBarItem>
          <TopBarItem primary>Join</TopBarItem>
        </span>
      </Container>
    </div>
  )
}
