import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'

export default function Slider({whichproduct}) {
  const param = useParams()
  const [slugCh, setslugCh] = useState(param.slug);

  const breakpoint = [
        {width:1,itemsToShow:1},
        {width:550,itemsToShow:2},
        {width:768,itemsToShow:3},
        {width:1200,itemsToShow:4}
    ]

  const ControlChangeSliderProduct = (exp) =>{
    setslugCh(exp)
  }

  return (
    <>
    <div className="products mt-3 mb-3 text-center">
    <div className="row">
    <Carousel breakPoints={breakpoint}>
      {slugCh != 1 &&  <Link to='/product/1' onClick={()=>ControlChangeSliderProduct(1)}>
          <div className="product_div d-inline-block text-center mx-3 mt-4">
            <div className="p_img mt-2"><img src="./assets/006.png" alt="" /></div>
            <div className="p_name fw-bold fs-4">استیک ماهی شیر</div>
            <div className='mt-2'><p>۴۰۰ گرمی</p></div>
            <div className="d-inline-block mt-3"><div className='fw-bold p_btn pt-1'>بیشتر</div></div>
          </div>
        </Link>}
        {slugCh != 2 && <Link to='/product/2'onClick={()=>ControlChangeSliderProduct(2)}>
            <div className="product_div d-inline-block text-center mx-3 mt-4">
            <div className="p_img mt-2"><img src="./assets/001 (1).png" alt="" /></div>
            <div className="p_name fw-bold fs-4">فیله ماهی أمور</div>
            <div className='mt-2'><p>۷۰۰ گرمی</p></div>
            <div className="d-inline-block mt-3"><div className='fw-bold p_btn pt-1'>بیشتر</div></div>
           </div>
            </Link>}
            {slugCh != 3 && <Link to='/product/3' onClick={()=>ControlChangeSliderProduct(3)}>
        <div className="product_div d-inline-block text-center mx-3 mt-4">
            <div className="p_img mt-2"><img src="./assets/005.png" alt="" /></div>
            <div className="p_name fw-bold fs-4">فیله ماهی سالمون</div>
            <div className='mt-2'><p>۷۰۰ گرمی</p></div>
            <div className="d-inline-block mt-3"><div className='fw-bold p_btn pt-1'>بیشتر</div></div>
        </div>
        </Link>}
        {slugCh != 4 && <Link to='/product/4'onClick={()=>ControlChangeSliderProduct(4)}>
        <div className="product_div d-inline-block text-center mx-3 mt-4">
            <div className="p_img mt-2"><img src="./assets/004 (1).png" alt="" /></div>
            <div className="p_name fw-bold fs-4">فیله ماهی قزل آلا</div>
            <div className='mt-2'><p>۷۰۰ گرمی</p></div>
            <div className="d-inline-block mt-3"><div className='fw-bold p_btn pt-1'>بیشتر</div></div>
        </div>
        </Link>}
        {slugCh != 5 &&<Link to='/product/5'onClick={()=>ControlChangeSliderProduct(5)}>
        <div className="product_div d-inline-block text-center mx-3 mt-4">
            <div className="p_img mt-2"><img src="./assets/00.png" alt="" /></div>
            <div className="p_name fw-bold fs-4 mt-2">فیله ماهی کپور</div>
            <div className='mt-2'><p>۷۰۰ گرمی</p></div>
            <div className="d-inline-block mt-4"><div className='fw-bold p_btn pt-1'>بیشتر</div></div>
        </div>
        </Link>}
        {slugCh != 6 && <Link to='/product/6'onClick={()=>ControlChangeSliderProduct(6)}>
        <div className="product_div d-inline-block text-center mx-3 mt-4">
            <div className="p_img mt-2"><img src="./assets/007 (2).png" alt="" /></div>
            <div className="p_name fw-bold fs-4">فیله ماهی شیر</div>
            <div className='mt-2'><p>۷۰۰ گرمی</p></div>
            <div className="d-inline-block mt-3"><div className='fw-bold p_btn pt-1'>بیشتر</div></div>
        </div>
        </Link>}
        </Carousel>
  </div>
</div>
</>
  )
}
