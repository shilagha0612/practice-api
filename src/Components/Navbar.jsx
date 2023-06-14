import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()

    const goBackHandler=()=>{
        navigate(-1)

    }
  return (
    <div>
        <ul>
            <li>
                <button onClick={goBackHandler}>Back it</button>
            </li>
            <li>

                <Link to='/about'>About </Link>
            </li>
            <li>
                <Link to='/contact'>Contact </Link> 
            </li>
            <li>
                <Link to='/favFood'>Favorite Food</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar