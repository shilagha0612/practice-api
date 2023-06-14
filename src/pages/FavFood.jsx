import React from 'react'
import { useParams } from 'react-router-dom'

const FavFood = () => {
    const { food }=useParams()
  return (
    <div>
      
      <h1>
      My FavFood is {food}</h1>

    </div>
  )
}

export default FavFood
