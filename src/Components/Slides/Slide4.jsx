import React, { useState } from 'react'

export default function Slide4() {

    const [imgOne, setimgOne] = useState(false)
    const [imgTwo, setimgTwo] = useState(false)
    const [imgThree, setimgThree] = useState(false)
    const [imgFour, setimgFour] = useState(false)
    const [imgFive, setimgFive] = useState(false)
    const [imgSix, setimgSix] = useState(false)
    const [imgSeven, setimgSeven] = useState(false)
 

  return (
    <>
     <div className='text-center back_Gallery pt-4'>
        <img src="./assets/6 (1).png" alt="گالری تصاویر" />
        <div className="conts position-relative">
            <div className='cont1 d-inline-block'>
                <div className="img_gallery_menu33 pt-5"onMouseEnter={()=>setimgSix(true)} onMouseLeave={()=>setimgSix(false)}>
                        <div className='texts_back'>
                        <h4 className='fw-bold'>محصولات جدید</h4>
                        <p>رونمایی از محصولات جدید اوگینک</p>
                        </div>
                </div>
                <div className="img_gallery_menu34 mt-2"onMouseEnter={()=>setimgSeven(true)} onMouseLeave={()=>setimgSeven(false)}>
                </div>
            </div>
        <div className='cont2 d-inline-block'>
               <div className="img_gallery_menu31"onMouseEnter={()=>setimgThree(true)} onMouseLeave={()=>setimgThree(false)}>
                </div>
                <div className="img_gallery_menu30 mt-1 text-center pt-5"onMouseEnter={()=>setimgFour(true)} onMouseLeave={()=>setimgFour(false)}>
                            <div className='texts_back'>
                            <h4 className='fw-bold'>هزینه مناسب</h4>
                    <p>تنها برای قسمت های قابل خوردن ماهی هزینه میپردازید</p>
                            </div>
                </div>
                <div className="img_gallery_menu29 mt-2"onMouseEnter={()=>setimgFive(true)} onMouseLeave={()=>setimgFive(false)}>
                </div>
        </div>
        <div className='cont3 d-inline-block'>
        <div className="img_gallery_menu36" onMouseEnter={()=>setimgOne(true)} onMouseLeave={()=>setimgOne(false)}>
                </div>
                <div className="img_gallery_menu37 mt-1" onMouseEnter={()=>setimgTwo(true)} onMouseLeave={()=>setimgTwo(false)}>
                </div>
        </div>    
        </div>    
    </div>
    <div className='responsive_back'>
        <img src="./assets/4.jpg" className="w-100" />
    </div>
    </>
  )
}
