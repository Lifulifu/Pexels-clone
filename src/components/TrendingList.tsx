import React from 'react'
import './TrendingList.scss'

interface Props {
  items: string[]
}

export default function TrendingList({ items }: Props) {
  return (
    <div className='trending-list'>
      <span className='title'>Trending:</span>
      {
        items.map((item) => (
          <a href="/" className='item'>{item}</a>
        ))
      }
    </div>
  )
}
