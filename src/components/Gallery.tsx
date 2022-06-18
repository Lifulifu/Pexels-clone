import React from 'react'
import GalleryItem from './GalleryItem'

interface Props {
  images: string[],
}

export default function Gallery({ images }: Props) {
  return (
    <div className='gallery'>
      {
        images.map((url) => (
          <GalleryItem key={url} src={url} />
        ))
      }
    </div>
  )
}
