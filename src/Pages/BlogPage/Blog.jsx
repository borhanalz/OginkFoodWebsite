import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout/Layout'

export default function Blog() {

  return (
    <Layout>
      <div className="blog_posts mt-5 mb-5">
        <div className="row">
           <div className='col-xxl-4 col-xl-4 col-md-6 col-12 text-center'>
                  <div className="post_blog text-center d-inline-block mt-3">
                     <div className="img_post"><img src="./assets/top-view-fish-plate-with-spices-1.jpg" alt="قزل الای رنگین کمان" /></div>
                     <div className="title_post fw-bold d-inline-block mt-3"><p>همه چیز درباره ماهی قزل الای رنگین کمان</p></div>
                     <div className='text_color_post mt-3 px-4'>
                         <p>
                             ماهی قزل الای رنگین کمان که از انواع پرمصرف ماهی در ایران است.نخستین گونه از خانواده ازاد ماهیان می باشد که به عنوان غذای اصلی انسان پرورش یافت . در این مطلب در خصوص ماهی ، ... 
                         </p>
                     </div>
                     <div className='btn_post d-inline-block mt-3'>ادامه مطلب</div>
                   </div>
            </div>
                <div className='col-xxl-4 col-xl-4 col-md-6 col-12 text-center'>
                  <div className="post_blog text-center d-inline-block mt-3">
                     <div className="img_post"><img src="./assets/fresh-raw-trout-fish-pickle-ingredients-table-cooking-grilled-fish-preparation-top-view (2).jpg" alt="قزل الای رنگین کمان" /></div>
                     <div className="title_post fw-bold d-inline-block mt-3"><p>خواص بینظیر ماهی که نمیدانید !</p></div>
                     <div className='text_color_post px-4'>
                         <p>
                          ماهی یکی از بهترین منابع برای جذب پروتین مورد نیاز بدن است اما خواص گوشت ماهی به اینجا محدود نمیشود. وجود فواید و خواص بیشمار در این نوع گوشت ان را تبدیل به یکی از بهترین انتخاب ها برای وعده های غذا ...
                         </p>
                     </div>
                     <div className='btn_post d-inline-block mt-2'>ادامه مطلب</div>
                   </div>
                </div>
                <div className='col-xxl-4 col-xl-4 col-md-6 col-12 text-center'>
                  <div className="post_blog text-center d-inline-block mt-3">
                     <div className="img_post"><img src="./assets/ماهی-سفید.jpg" alt="قزل الای رنگین کمان" /></div>
                     <div className="title_post fw-bold d-inline-block mt-1"><p>طرز تهیه ماهی سفید یا سوف به همراه پوره رنگی</p></div>
                     <div className='text_color_post mt-3 px-4'>
                         <p>
                         در این مطلب میخواهیم یک غذای بسیار دلچسب و شیک از سری غذاهای بین المللی
                         که با ماهی سفید درست میشود را به شما آموزش بدهیم...
                         </p>
                     </div>
                     <div className='btn_post d-inline-block mt-5'>ادامه مطلب</div>
                   </div>
                </div>
                <div className='col-xxl-4 col-xl-4 col-md-6 col-12 text-center'>
                  <div className="post_blog text-center mt-3 d-inline-block">
                     <div className="img_post"><img src="./assets/462600.jpg" alt="قزل الای رنگین کمان" /></div>
                     <div className="title_post fw-bold d-inline-block mt-3"><p>اثر شگفت انگیز مصرف ماهی در پیشگیری از آلزایمر</p></div>
                     <div className='text_color_post mt-3 px-4'>
                         <p>
                         در این مقاله سعی داریم ابتدا به موضوع شناخت بیماری
آلزایمر و علائم و نشانهای آن، فواید ماهی و امگا ۳، تعریف
امگا ۳ و سپس پیشگیری از آلزایمر با مصرف ماهی بپردازیم...
                         </p>
                     </div>
                     <div className='btn_post d-inline-block mt-3'>ادامه مطلب</div>
                   </div>
                </div>
                <div className='col-xxl-4 col-xl-4 col-md-6 col-12 text-center'>
                  <div className="post_blog text-center mt-3 d-inline-block">
                     <div className="img_post"><img src="./assets/fresh-sliced-salmon-fillet-with-arugula-avocado-lemon-slate-plate-wild-atlantic-fish (1).jpg" alt="قزل الای رنگین کمان" /></div>
                     <div className="title_post fw-bold d-inline-block mt-3 px-1"><p>کیک ماهی سالمون، غذای یونانی با محبوبیت بین المللی</p></div>
                     <div className='text_color_post mt-3 px-4'>
                         <p>
                         در این مطلب قصد داریم تا شما را با یک از متداول ترین
روش های پخت ماهی (کیک ماهی) در دنیا که ریشه در یونان باستان دارد آشنا کنیم.
                         </p>
                     </div>
                     <div className='btn_post d-inline-block mt-3'>ادامه مطلب</div>
                   </div>
                </div>
                <div className='col-xxl-4 col-xl-4 col-md-6 col-12 text-center'>
                  <div className="post_blog text-center mt-3 d-inline-block">
                     <div className="img_post"><img src="./assets/میگو-1280x850.jpg" alt="قزل الای رنگین کمان" /></div>
                     <div className="title_post fw-bold d-inline-block mt-3"><p>آماده سازی میگو پس از صید</p></div>
                     <div className='text_color_post mt-3 px-4'>
                         <p>
                         در این مطلب میخواهیم در رابطه با اعمالی که برای فرآوری
میگو در دریا انجام شود، مطالبی را ذکر کنیم. مدت زمان
مطالعه ۵ دقیقه فهرست: عوامل فساد میگو جداسازی میگو
شست وشو میگو سرد کردن،...
                         </p>
                     </div>
                     <div className='btn_post d-inline-block mt-3'>ادامه مطلب</div>
                   </div>
                </div>
                 
          </div>
      </div>
    </Layout>
  )
}
