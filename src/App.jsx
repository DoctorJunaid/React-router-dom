import React from 'react'
import Header from './components/header'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Footer from './components/Footer'

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
      <Footer />
    </div>
  )
}

export default App
