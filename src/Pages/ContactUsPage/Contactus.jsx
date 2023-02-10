import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Map from './Map'

export default function Contactus() {
  return (
    <Layout>
      
      <div className="contacts_text mb-5 d-inline-block">
            <div className='title_text_contact'><h4>اطلاعات تماس</h4></div>
            <ul className='float-end text_side_one'>
              <li className='mt-4'>
                <p className='fw-bold m-0 text_color_post'>انجمن پشتیبانی</p>
                <p>برای بیش از 24 ساعت</p>
              </li>
              <li>
                <p className='fw-bold m-0 d-inline-block text_color_post'>تلفن : </p>       
               <p className='d-inline-block mx-1'> 021-36600354 </p>
              </li>
              <li>
                <p className='fw-bold m-0 d-inline-block text_color_post'>تلفن : </p>       
               <p className='d-inline-block mx-1'> 021-33686240 </p>
              </li>
              <li>
                <p className='fw-bold m-0 d-inline-block text_color_post'>ایمیل : </p>       
               <p className='d-inline-block mx-1'>namzifood@gmail.com</p>
              </li>
            </ul>
            <ul className='d-inline-block'>
              <li className='mt-4'>
                <p className='fw-bold m-0 d-inline-block text_color_post'>ادرس دفتر پخش : </p>       
                <p className='m-0 d-inline-block mx-1'>میدان میوه و تره بار بعثت دفتر صنایع</p>
                <p className="m-0">بسته بندی اوگینک</p>
              </li>
              <li className='mt-3'>
                <p className='fw-bold m-0 d-inline-block text_color_post'>ادرس کارخانه : </p>       
               <p className='d-inline-block m-0 mx-1'>میدان میوه و تره بار بعثت واحد بسته بندی</p>
               <p>ابزیان</p>
              </li>
            </ul>
      </div>
      <Map/>
      <div className="clearfix"></div>
    </Layout>
  )
}
