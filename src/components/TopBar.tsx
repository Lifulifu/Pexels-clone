import React from 'react'
import { Container } from '@mui/system'
import { Button } from '@mui/material'
import { Typography } from '@mui/material';
import LogoButton from './LogoButton';

export default function TopBar() {
  return (
    <div className='topbar'>
      <Container style={{ display: 'flex' }} maxWidth='lg'>
        <LogoButton />
      </Container>
    </div>
  )
}
