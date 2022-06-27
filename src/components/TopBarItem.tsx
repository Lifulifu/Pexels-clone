import React from 'react'
import './TopBar.scss'

import { Button } from '@mui/material'


interface Props {
  children?: React.ReactNode,
  variant?: string,
  className?: string,
  [others: string]: any
}

export default function TopBarItem({ children, variant, className, ...otherProps }: Props) {
  return (
    <Button className={`topbar-item ${className} ${variant?.length ? variant : 'text'}`} {...otherProps}>
      {children}
    </Button>
  )
}
