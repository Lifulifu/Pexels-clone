import React, { useState, useEffect } from 'react'

interface Props {
  columns: number,
  spacing: string,
  items: React.ReactNode,
}

export default function BrickLayout({ columns, spacing, items }: Props) {

  const [columnData, setColumnData] = useState<React.ReactNode[]>(Array(columns).fill([]))

  return (
    <div className='brick-layout'>
      {
        Array(columns).fill(
          <div className='column'>

          </div>
        )
      }
    </div>
  )
}
