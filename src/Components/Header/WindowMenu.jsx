import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'

export default class WindowMenu extends Component {

  render() {
    return (
        <div className='window'>
            <ul className='pt-1'>
                 <Link to='/'><li className='window_li mt-4 fs-3'>منو</li></Link>
                 <Link><li className='window_li mt-4 fs-3'>گالری</li></Link>
                 <Link to='/blog'><li className='window_li mt-4 fs-3'>مقالات</li></Link>
                 <Link to='/products'><li className='window_li mt-4 fs-3'>محصولات</li></Link>
                 <Link to='/contactus'><li className='window_li mt-4 fs-3'>ارتباط با ما</li></Link>
                 <Link to='/aboutus'><li className='window_li mt-4 fs-3'>درباره ما</li></Link>
            </ul>
        </div>
    )
  }
}
