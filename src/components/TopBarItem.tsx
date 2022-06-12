import React from 'react'
import { Button } from '@mui/material'

interface Props {
  children?: React.ReactNode,
  primary?: boolean,
  secondary?: boolean,
  [others: string]: any
}

export default function TopBarItem({ children, primary, secondary, ...otherProps }: Props) {
  return (
    <Button style={{
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '16px',
      color: primary ? 'black' : 'inherit',
      backgroundColor: primary ? 'white' : 'none',
      textTransform: 'none',
      padding: '10px 15px 10px 15px'
    }} {...otherProps}>
      {children}
    </Button>
  )
}
