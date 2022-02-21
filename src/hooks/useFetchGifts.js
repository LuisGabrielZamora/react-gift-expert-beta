import { useEffect, useState } from 'react'
import { getGifs } from '../repositories/getGifs.repository'

export const useFetchGifts = (category) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {

    getGifs(category).then(
      images => {

        return setState({
          data: images,
          loading: false
        })

      }
    )

  }, [category])

  return state

}