import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to='Contact'>Contact</Link>
            <Link to='About'>About</Link>
            <Link to='Login'>Login</Link>
           
           
      </nav>
     
      
      
    </div>
  )
}

export default Navbar
