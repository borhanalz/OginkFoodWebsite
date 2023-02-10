import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


export default function Gotop() {

  const HndleGoTop = ()=>{
    window.scrollTo(0,0)
  }

  return (
    <div className='gotop text-center pt-3' onClick={HndleGoTop}>
        <FontAwesomeIcon icon={faArrowUp} className="gotop_ico"/>
    </div>
  )
}
