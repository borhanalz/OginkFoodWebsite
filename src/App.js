import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import './Style/style.scss'
import Gallery from './Pages/GalleryPage/Gallery'
import Blog from './Pages/BlogPage/Blog'
import Aboutus from './Pages/AboutusPage/Aboutus'
import Contactus from './Pages/ContactUsPage/Contactus'
import Product from './Pages/ProductIn/Product'
import Products from './Pages/TypeProducts/Products'
import NoMatch from './Pages/NoMatch/NoMatch'
import Blog1 from './Pages/BlogPage/Blog1/Blog1'
import Slider from './Components/Slider/Slider'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog1' element={<Blog1/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/product/:slug' element={<Product/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/slider' element={<Slider/>}/>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </div>
  )
}
