import React, { useState, useEffect, useCallback, useRef } from 'react'
import './ImageGallery.scss'
import { argmin, ImageData } from '../utils/util'

interface ImageGalleryItemProps {
  imageData: ImageData
  itemRef?: (e: HTMLAnchorElement) => void
}

interface ImageGalleryColProps {
  imageDatas: ImageData[],
  gap?: string,
  setBottomReached: (bottomReached: boolean) => any
}

interface ImageGalleryProps {
  imageDatas: ImageData[]
  columns?: number,
  vGap?: string,
  hGap?: string,
  setBottomReached: (bottomReached: boolean) => any
}

function ImageGalleryItem({ imageData, itemRef }: ImageGalleryItemProps) {
  return (
    <a className='image-gallery-item' ref={itemRef}>
      <img src={imageData.url} loading="lazy" />
    </a>
  )
}

function ImageGalleryCol({ imageDatas, gap, setBottomReached }: ImageGalleryColProps) {

  const observer = useRef<IntersectionObserver>();
  const onLastItemMount = useCallback((node: HTMLAnchorElement) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('col bottom reached')
        setBottomReached(true);
      }
    })
    if (node) observer.current.observe(node);
  }, [])

  return (
    <div className='image-gallery-col'
      style={{ 'gap': gap }}>
      {
        imageDatas.map((imageData, i) => {
          if (i >= imageDatas.length - 1)
            return <ImageGalleryItem itemRef={onLastItemMount} key={i} imageData={imageData} />
          return <ImageGalleryItem key={i} imageData={imageData} />
        })
      }
    </div>
  )
}

export default function ImageGallery({
  imageDatas, columns = 3, vGap = "2em", hGap = "2em", setBottomReached }: ImageGalleryProps) {

  const [columnsData, setColumnsData] =
    useState<ImageData[][]>(new Array(columns).fill(null).map(_ => [])); // 2d array of imageData

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
          <ImageGalleryCol
            key={col} imageDatas={columnsData[col]} gap={vGap}
            setBottomReached={setBottomReached} />
        ))
      }
    </div>
  )
} 