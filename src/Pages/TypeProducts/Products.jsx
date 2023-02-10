import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout/Layout'

export default function Products() {
  return (
    <Layout>
        <div className="products mt-3 mb-5 text-center">
            <div className="row">
                <Link to='/product/1' className='col-xxl-4'>
                  <div className="product_div d-inline-block text-center mx-3 mt-4">
                    <div className="p_img mt-2"><img src="./assets/006.png" alt="" /></div>
                    <div className="p_name fw-bold fs-4">استیک ماهی شیر</div>
                    <div className='mt-2'><p>۴۰۰ گرمی</p></div>
                    <div className="d-inline-block mt-3"><div className='fw-bold p_btn pt-1'>بیشتر</div></div>
                  </div>
                </Link>
                    <Link to='/product/2'className='col-xxl-4'>
                    <div className="product_div d-inline-block text-center mx-3 mt-4">
                    <div className="p_img mt-2"><img src="./assets/001 (1).png" alt="" /></div>
                    <div className="p_name fw-bold fs-4">فیله ماهی أمور</div>
                    <div className='mt-2'><p>۷۰۰ گرمی</p></div>
                    <div className="d-inline-block mt-3"><div className='fw-bold p_btn pt-1'>بیشتر</div></div>
                   </div>
                    </Link>
                <Link to='/product/3'className='col-xxl-4'>
                <div className="product_div d-inline-block text-center mx-3 mt-4">
                    <div className="p_img mt-2"><img src="./assets/005.png" alt="" /></div>
                    <div className="p_name fw-bold fs-4">فیله ماهی سالمون</div>
                    <div className='mt-2'><p>۷۰۰ گرمی</p></div>
                    <div className="d-inline-block mt-3"><div className='fw-bold p_btn pt-1'>بیشتر</div></div>
                </div>
                </Link>
                <Link to='/product/4'className='col-xxl-4'>
                <div className="product_div d-inline-block text-center mx-3 mt-4">
                    <div className="p_img mt-2"><img src="./assets/004 (1).png" alt="" /></div>
                    <div className="p_name fw-bold fs-4">فیله ماهی قزل آلا</div>
                    <div className='mt-2'><p>۷۰۰ گرمی</p></div>
                    <div className="d-inline-block mt-3"><div className='fw-bold p_btn pt-1'>بیشتر</div></div>
                </div>
                </Link>
                <Link to='/product/5'className='col-xxl-4'>
                <div className="product_div d-inline-block text-center mx-3 mt-4">
                    <div className="p_img mt-2"><img src="./assets/00.png" alt="" /></div>
                    <div className="p_name fw-bold fs-4 mt-2">فیله ماهی کپور</div>
                    <div className='mt-2'><p>۷۰۰ گرمی</p></div>
                    <div className="d-inline-block mt-4"><div className='fw-bold p_btn pt-1'>بیشتر</div></div>
                </div>
                </Link>
                <Link to='/product/6'className='col-xxl-4'>
                <div className="product_div d-inline-block text-center mx-3 mt-4">
                    <div className="p_img mt-2"><img src="./assets/007 (2).png" alt="" /></div>
                    <div className="p_name fw-bold fs-4">فیله ماهی شیر</div>
                    <div className='mt-2'><p>۷۰۰ گرمی</p></div>
                    <div className="d-inline-block mt-3"><div className='fw-bold p_btn pt-1'>بیشتر</div></div>
                </div>
                </Link>
          </div>
        </div>
    </Layout>
  )
}
