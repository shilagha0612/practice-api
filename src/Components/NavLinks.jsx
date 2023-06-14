import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <div>NavLinks

<ul>
          <li>
            <Link exact to="/" activeClassName="active">Home</Link>
          </li>
          <li>
            <Link to="/number" activeClassName="active">Number 4</Link>
          </li>
          <li>
            <Link to="/hello" activeClassName="active">Word: Hello</Link>
          </li>
          <li>
            <Link to="/:word" activeClassName="active">Word: Hello</Link>
          </li>
          <li>
            <Link to="/hello/blue/red" activeClassName="active">Styled Word</Link>
          </li>
        </ul>

    </div>
  )
}

export default NavLinks