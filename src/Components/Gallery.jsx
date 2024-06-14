import React from 'react'
import { PHOTOS } from '../photos'

const Gallery = () => {
  return (
    <div>
      {PHOTOS.map((src, index) => (
        <img key={index} src={src} alt={`Zdjęcie z galerii ${index+1}`} />
      ))}
    </div>
  )
}

export default Gallery