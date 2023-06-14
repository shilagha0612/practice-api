import React from 'react'
import { useParams } from 'react-router-dom'

const WordPage = () => {
    const{word}=useParams()
    return(
        <div>
            <h1>
                Word Page
                The word is {word}
            </h1>
        </div>
    )
}
  

export default WordPage