import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const[favFood,setFavFood]=useState('')
    const[favFoodErr,setFavFoodErr]=useState("")
    const navigate=useNavigate()

    const changeHandler=(e)=>{
       
        setFavFood(e.target.value)
        
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(favFood.length<2){
            setFavFoodErr("Food need to be 2 or more character")
        }else{
            setFavFoodErr("")
            navigate(`/favFood/${favFood}`)
        }
       

    }
  return (
    <div>
        <form onSubmit={submitHandler}>
        <label htmlFor='favFood'>What is your favorite food</label>
        <input type='text' name="favFood" value={favFood}
        onChange={changeHandler}/>
        
        {
            favFoodErr &&
            <p>{favFoodErr}</p>
        }
        <button>Next</button>

        </form>
        
    </div>
  )
}

export default Landing