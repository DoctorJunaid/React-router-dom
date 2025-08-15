import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <nav>
        <img width="40" height="40" src="src/assets/logo.png" alt="" />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    
        <button> <Link to="/login" >Get Started</Link></button>
      </nav>
    </div>
  )
}

export default Header
