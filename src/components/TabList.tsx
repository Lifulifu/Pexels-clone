import React from 'react'
import './TabList.scss'

export interface TabListItem {
  name: string,
  isActive: boolean
}

interface Props {
  items: TabListItem[],
  onChange: (item: string) => void
}

export default function TabList({ items, onChange }: Props) {


  return (
    <div className='tab-list'>
      {
        items.map((item) => (
          <span className={'item ' + (item.isActive ? 'active' : '')}
            onClick={() => { onChange(item.name) }}
            key={item.name}>
            {item.name}
          </span>
        ))
      }
    </div>
  )
}
