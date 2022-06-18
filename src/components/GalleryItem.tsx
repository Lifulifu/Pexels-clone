import React from 'react'
import './Gallery.scss';

interface Props {
  src: string,
}

export default function GalleryItem({ src }: Props) {
  return (
    <div className='gallery-item'>
      <img src={src} />
    </div>
  )
}
