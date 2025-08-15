import React from 'react'
import Header from './components/header'
import Home from './pages/home'
import Product from './pages/product'
import About from './pages/about'
import Contact from './pages/contact'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/login'

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
