import React from 'react'
import {Link} from 'react-router-dom'

export default function FooterSwitchMenu() {
  return (
    <div className='text-center mt-4'>
      <div className="row">
        <ul className='footer_ul text-center'>
         <Link to='/'><li className='footer_li col-xxl-1 col-xl-1 col-lg-1 col-md-4 col-sm-6 mt-3 d-inline-block mx-3 mx-lg-1 px-2 list-group-item'>منو</li></Link>
         <Link to='/gallery'><li className='footer_li col-xxl-1 col-xl-1 col-lg-1 col-md-4 col-sm-6 mt-3 d-inline-block mx-3 mx-lg-1 px-2 list-group-item'>گالری</li></Link>
         <Link to='/blog'><li className='footer_li col-xxl-1 col-xl-1 col-lg-1 col-md-4 col-sm-6 mt-3 d-inline-block mx-3 mx-lg-1 px-2 list-group-item'>مقالات</li></Link>
         <Link to='/products'><li className='footer_li col-xxl-1 col-xl-1 col-lg-1 col-md-4 col-sm-6 mt-3 d-inline-block mx-3 mx-lg-1 px-2 list-group-item'>محصولات</li></Link>
         <Link to='/contactus'><li className='footer_li col-xxl-1 col-xl-1 col-lg-1 col-md-4 col-sm-6 mt-3 d-inline-block mx-3 mx-lg-1 px-2 list-group-item'>ارتباط با ما</li></Link>
         <Link to='/aboutus'><li className='footer_li col-xxl-1 col-xl-1 col-lg-1 col-md-4 col-sm-6 mt-3 d-inline-block mx-3 mx-lg-1 px-2 list-group-item'>درباره ما</li></Link>
        </ul>
      </div>
    </div>
  )
}
