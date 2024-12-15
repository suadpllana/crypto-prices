import React from 'react'
import {Link} from "react-router-dom"



const Nav = () => {
  return (
  
          <nav className="navContainer">
        <Link to="crypto-prices/">Crypto Prices</Link>
        <Link to="crypto-prices/news">Crypto News</Link>
      </nav>
 
  )
}

export default Nav
