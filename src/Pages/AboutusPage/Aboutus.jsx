import React from 'react'
import Layout from '../../Components/Layout/Layout'
import FishProperty1 from './FishProperty1'
import OginkStandard from './OginkStandard'
import Paragraph4 from './Paragraph4'
import Paragraph5 from './Paragraph5'
import Paragraph6 from './Paragraph6'

export default function Aboutus() {
  return (
    <Layout>
        <div className='mt-5'>
        <div className='text-center mt-2 mb-2'><img src="./assets/fresh-raw-salmon-fillet-white-background.jpg" className='width_about_img'/></div>
              <div className="title_aboutus2 text-center mt-5 fw-bold fs-3 pt-2"><a href="#">درباره اوگینک</a></div>
                     <p className='mt-3 mb-5 fs-5 texts_cut'>
                                        تخصص اوگینک رساندن ماهی و می گوی تازه به آشپزخانه و سفره ایرانیان است. اوگینک این افتخار را دارد تا طعم
                          واقعی ماهی را به شماهدیه دهد.
                          ما در اوگینک علاقه زیادی به کیفیت عالی محصول داریم و می خواهیم این حس خوب را با شما به اشتراک بگذاریم.
                          نقطه
                          قوت ما علاوه بر ک یف یت، قیمت عادلانه و مقرون به صرفه محصولات ما است چراکه اوگی نک اعتقاد دارد که حتی
                          بهتر ین ها هم می توانند مقرون به صرفه باشند.
                          اوگینک به عنوان متخصص در زمینه گوشت ماهی و میگو، دقیق ا می داند که بهترین ک یفی ت را چطور و چگونه در
                          کمتر ین زمان در اختیار شما قرار دهد.
                          بازاررسانی محصولات اوگ ینک در کمترین زمان و با بیشتر ین دقت و بسته بندی انجام شده و اوگینک در رعایت
                          دستورالعمل های خود بسیار حساس است.
                          در ماهی های اوگینک بوی مطلوب و بوی علف های دریایی را استشمام خواهید کرد. قوام بدن در فیله ماهی به
                          صورت سطح صاف و الاستیک است.
                          گوشت ماهی محکم بوده و دارای خاصیت ارتجایی، سطحی صاف بوده و با فشار انگشت به حالت اول خود بر می
                          گردد.
                     </p>
        </div>
        <OginkStandard/>
        <FishProperty1/>
        <Paragraph4/>
        <Paragraph5/>
        <Paragraph6/>
    </Layout>
  )
}
