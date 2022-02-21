import React from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGifts } from '../hooks/useFetchGifts'

export const GifGrid = ({category}) => {

  const {loading, data: images} = useFetchGifts(category)

  return (
    <>
      <h3 className={'animate__animated animate__bounce'}>{category}</h3>
      { loading && <h4  className={'animate__animated animate__flash'}>Cargando ...</h4> }
      <div className={'card-grid'}>
        {
          images.map(img => (
            <GifGridItem
              key={ img.id }
              { ...img }
            />
          ))
        }
      </div>
    </>
  )

}