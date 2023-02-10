import React from 'react'
import {Link} from 'react-router-dom'

export default function BigNav() {
  return (
    
    <nav className='nav_big'>
         <div className="container pt-3 text-center">

             <ul className='header_ul d-inline-block'>
              <Link to='/'><li className='header_li px-2 d-inline-block'>منو</li></Link>
              <Link><li className='header_li px-2 d-inline-block'>گالری</li></Link>
              <Link to='/products'><li className='header_li px-2 d-inline-block'>محصولات</li></Link>
              <li className='header_li header_li_logo px-2 d-inline-block'><img src="./assets/لوگو.png" className='header_logo' alt="logo" /></li>
              <Link to='/blog'><li className='header_li px-2 d-inline-block'>مقالات</li></Link>
              <Link to='/contactus'><li className='header_li px-2 d-inline-block'>ارتباط با ما</li></Link>
              <Link to='/aboutus'><li className='header_li px-2 d-inline-block'>درباره ما</li></Link>
            </ul>

        </div>
   </nav>
  )
}
