import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GiftExpertApp = () => {

  const [categories, setCategories] = useState([])

  return (
    <>
      <h1>Gift Expert App</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map(category =>
            <GifGrid
              key={category}
              category={category}
            />
          )
        }
      </ol>
    </>
  )

}

export default GiftExpertApp