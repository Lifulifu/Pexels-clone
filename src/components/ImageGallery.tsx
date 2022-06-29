import React, { useState, useEffect } from 'react'
import './ImageGallery.scss'
import { argmin, ImageData } from '../utils/util'

interface ImageGalleryItemProps {
  imageData: ImageData
}

interface ImageGalleryColProps {
  imageDatas: ImageData[],
  gap?: string
}

interface ImageGalleryProps {
  imageDatas: ImageData[]
  columns?: number,
  vGap?: string,
  hGap?: string
}

function ImageGalleryItem({ imageData }: ImageGalleryItemProps) {
  return (
    <a className='image-gallery-item'>
      <img src={imageData.url} loading="lazy" />
    </a>
  )
}

function ImageGalleryCol({ imageDatas, gap }: ImageGalleryColProps) {
  return (
    <div className='image-gallery-col'
      style={{ 'gap': gap }}>
      {
        imageDatas.map((imageData, i) => (
          <ImageGalleryItem key={i} imageData={imageData} />
        ))
      }
    </div>
  )
}

export default function ImageGallery({ imageDatas, columns = 3, vGap = "2em", hGap = "2em" }: ImageGalleryProps) {

  const [columnsData, setColumnsData] = useState<ImageData[][]>(new Array(columns).fill(null).map(_ => []));

  useEffect(() => {
    const columnsAccumHeight: number[] = new Array(columns).fill(0);
    const newColumnsData = new Array(columns).fill(null).map(_ => new Array());
    // push the imageData to the col that has current smallest height
    imageDatas.forEach((imageData) => {
      const minCol = argmin(columnsAccumHeight)
      newColumnsData[minCol].push(imageData)
      columnsAccumHeight[minCol] += (imageData.h / imageData.w);
    })
    setColumnsData(newColumnsData);
  }, [imageDatas, columns])

  return (
    <div className='image-gallery'
      style={{ 'gap': hGap }}>
      {
        Array(columns).fill(null).map((_, col) => (
          <ImageGalleryCol key={col} imageDatas={columnsData[col]} gap={vGap} />
        ))
      }
    </div>
  )
} 