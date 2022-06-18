import React from 'react';
import './TrendingList.scss';
import { FiMoreHorizontal } from 'react-icons/fi';

interface Props {
  items: string[]
}

export default function TrendingList({ items }: Props) {
  return (
    <div className='trending-list'>
      <span className='title'>Trending:</span>
      <span className='item-container'>
        {
          items.map((item) => (
            <a key={item} href="/" className='item'>{item}</a>
          ))
        }
      </span>
      <FiMoreHorizontal className='more-icon' />
    </div>
  )
}
