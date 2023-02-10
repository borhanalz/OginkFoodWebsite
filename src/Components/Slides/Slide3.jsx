import React from 'react'
import { Link } from 'react-router-dom'

export default function Slide3() {

  return (
   <Link to='/products'>
              <div className='back_slidethree'>
        <div className='float-start products_slide3'>
            <div><Link to='/product/1'><img src="./assets/f31.png" className='product' alt="productOne" /></Link></div>
            <div><Link to='/product/3'><img src="./assets/f32 (1).png" className='product' alt="productOne" /></Link></div>
            <div><Link to='/product/4'><img src="./assets/f33.png" className='product' alt="productOne" /></Link></div>
        </div>
    </div>
   </Link>
  )
}
