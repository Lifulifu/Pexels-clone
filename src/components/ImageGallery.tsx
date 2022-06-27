import React, { useState, useEffect } from 'react'

interface Props {
  columns: number,
  spacing: string,
  images: {
    imageUrl: string,
    url: string
  }[]
}

interface ImageData {
  imageUrl: string,
  url: string,
  w: number,
  h: number
}

export default function ImageGallery({ columns, spacing, images }: Props) {

  const [data, setData] = useState<ImageData[]>([]);
  const [columnData, setColumnData] = useState<React.ReactNode[]>(Array(columns).fill([]));

  return (
    <div className='image-gallery'>
      {
        Array(columns).fill(
          <div className='column'>

          </div>
        )
      }
    </div>
  )
} 