import React,{useState,useEffect} from 'react'
import Layout from '../../Components/Layout/Layout'
import {useParams} from 'react-router-dom'
import Slider from '../../Components/Slider/Slider';

export default function Product() {

  const param = useParams();

  const [productSlider, setproductSlider] = useState(param.slug);
  
  const product_content = [
    {
      "id":1,
      "name":"استیک ماهی شیر",
      "content1":"هر بسته استیک ماهی شیر حاوی ۴۰۰ گرم استیک ماهی و پاک شده اماده مصرف و بدون نیاز به  شست و شو است",
      "description":"",
      "keepment":"قابل نگهداری به صورت گرم و تازه تا هشت روز در دمای ۰ تا ۴ درجه است. بعد از هشت روز در فریزر نگهداری شود ",
      "image":"./assets/006.png",
      "calories":"139 کالری"
    },
    {
      "id":2,
      "name":"فیله ماهی أمور",
      "content1":"هر بسته فیله ماهی أمور حاوی ۷۰۰ گرم فیله ماهی و پاک شده اماده مصرف و بدون نیاز به  شست و شو است",
      "description":"ماهی آمور از خانواده کپور هاست و به دلیل شباهت زیاد به ماهی سفید به سفید پرورشی نیز معروف است،ماهی آمور محصول اوگینک نیز مانند اکثر محصولات فیله شده(بدون سر،دم،استخوان و محتویات شکم)می باشد ",
      "keepment":"شرایط نگهداری به صورت تازه تا ۷۲ ساعت در دمای ۰ تا ۴ درجه سانتیگراد پس از تا ۹ ماه به صورت منجمد",
      "image":"./assets/001 (1).png",
      "calories":"127 کالری"
    }
    , {
      "id":3,
      "name":"فیله ماهی سالمون",
      "content1":"هر بسته فیله ماهی سالمون حاوی ۷۰۰ گرم فیله ماهی و پاک شده اماده مصرف و بدون نیاز به  شست و شو است",
      "description":" ماهی سالمون ایرانی به رنگ زیبای نارنجی یا صورتی و با طعم خوش و لذیذ یکی از محبوب ترین ماهی های خوارکی ایران می باشد،ماهی سالمون محصول اوگینک به صورت فیله شده(بدون سر،دم،استخوان و محتویات شکم)عرضه میگردد،نحوه پخت این ماهی نیز مانند ماهی قزل‌آلا به صورت کبابی،سرخ شده و بخارپز می باشد",
      "keepment":"شرایط نگهداری به صورت تازه تا ۷۲ ساعت در دمای ۰ تا ۴ درجه سانتیگراد پس از تا ۹ ماه به صورت منجمد",
      "image":"./assets/005.png",
      "calories":"179 کالری"
    }
    , {
      "id":4,
      "name":"فیله ماهی قزل آلا",
      "content1":"هر بسته فیله ماهی قزل آلا حاوی ۷۰۰ گرم فیله ماهی و پاک شده اماده مصرف و بدون نیاز به  شست و شو است",
      "description":"ماهی قزل الا محبوب ترین ماهی خوراکی ایران است،ماهی قزل آلا اوگینک به صورت فیله شده (بدون سر، دم،استخوان و محتویات شکم )عرضه میگردد،نحوه پخت این ماهی خوشمزه به صورت کبابی،سرخ شده،بخارپز،و ... می باشد",
      "keepment":"شرایط نگهداری به صورت تازه تا ۷۲ ساعت در دمای ۰ تا ۴ درجه سانتیگراد پس از تا ۹ ماه به صورت منجمد",
      "image":"./assets/004 (1).png",
      "calories":"190 کالری"
    }
    , {
      "id":5,
      "name":"فیله ماهی کپور",
      "content1":"هر بسته استیک ماهی شیر حاوی ۷۰۰ گرم فیله ماهی و پاک شده اماده مصرف و بدون نیاز به  شست و شو است",
      "description":"ماهی کپور را میتوان محبوب ترین ماهی خوراکی اب شیرین دنیا دانست ، محصول ماهی کپور اوگینک به صورت فیله شده (بدون سر ، دم ، استخوان و محتویات شکم) پخت این ماهی در دنیا تنوع بسیاری دارد و در غذاهای دریایی بسیاری از کشور ها سهم بسیاری دارد",
      "keepment":"شرایط نگهداری به صورت تازه تا ۷۲ ساعت در دمای ۰ تا ۴ درجه سانتیگراد پس از تا ۹ ماه به صورت منجمد",
      "image":"./assets/00.png",
      "calories":"127 کالری"
    },
    {
      "id":6,
      "name":"فیله ماهی شیر",
      "content1":"هر بسته فیله ماهی شیر حاوی ۷۰۰ گرم فیله ماهی و پاک شده اماده مصرف و بدون نیاز به  شست و شو است",
      "description":"",
      "keepment":"شرایط نگهداری به صورت تازه تا ۷۲ ساعت در دمای ۰ تا ۴ درجه سانتیگراد پس از تا ۹ ماه به صورت منجمد",
      "image":"./assets/007 (2).png",
      "calories":"139 کالری"
    }
  ]

  const Iterit_contents = product_content.map((content)=>{
    if(content.id== param.slug) {
      return (
      <div className='mt-5 mb-5' key={content.id}>
      <div className="img_productIn d-inline-block">
        <img src={content.image} />
      </div>
          <div className='contents_in d-inline-block'>
              <div className='mb-5'>
                <h2 className='title_aboutus fs-4 text-center pt-3 mx-1 fw-bold'>{content.name}</h2>
              </div>
              {content.content1 && <div>
                <h5 className='text_color_post mx-1 text-right'>چیدمان : </h5>
                <p className='width_des'>
                  {content.content1}
                </p>
              </div>}
              <div>
                <h5 className='text_color_post mx-1'>میزان کالری {content.name} (۱۰۰گرم): </h5>
                <p className='d-inline-block'>
                    {content.calories}
                </p>
              </div>
              <div>
                <h5 className='text_color_post mx-1'>شرایط نگهداری ماهی اوگینک : </h5>
                <p className='width_des'>
                    {content.keepment}
                </p>
              </div>
          {content.description && <div>
                <h5 className='text_color_post mx-1 text-right'>توضیحات : </h5>
                <p className='width_des'>
                  {content.description}
                </p>
              </div>}
              <div>
                <h5 className='text_color_post mx-1'> پروانه بهداشتی : </h5>
                <p>
                کد پروانه بهداشتی بهره برداری دامپزشکی lVC913961208163421

                </p>
                <p>
                شماره پروانه بهداشتی تولید دامپزشکی :071673
                </p>
              </div>
          </div>
    </div>
      )
    
    }
})


  return (
    <Layout>
             {Iterit_contents}
             <div>
             <h3 className='title_aboutus2 text-center pt-2'>محصولات مرتبط</h3>
             </div>
             <Slider whichproduct={productSlider}/>
    </Layout>
  )
}
