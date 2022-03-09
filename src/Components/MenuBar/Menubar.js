import React from 'react'
import { Link } from 'react-router-dom'

const Menubar = () => {
  return (
    <div>
      <div>
          <h1>WAlMART Shop </h1>
      </div>
      <div>
           <ul>
             <Link to="/home"><li>Home</li></Link>
             <Link to="/about"><li>About</li></Link>
           <Link to="/menubar"></Link>  <li>Service Center </li>
             <li>Sign In</li>
           </ul>
      </div>
    </div>
  )
}

export default Menubar