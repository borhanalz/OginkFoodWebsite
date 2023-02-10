import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPinterestP,faInstagram,faTwitter,faFacebookF } from '@fortawesome/free-brands-svg-icons'

export default function FooterContacts() {
  return (
    <div className='row'>    
        <ul className="footer_contact text-center mt-5">
             <li className='contact_ico_back col-12 text-center pt-2 d-inline-block mx-2'><FontAwesomeIcon icon={faPinterestP} className="icon_fontaw"/></li>
             <li className='contact_ico_back col-12 text-center pt-2 d-inline-block mx-2'><FontAwesomeIcon icon={faInstagram} className="icon_fontaw"/></li>
             <li className='contact_ico_back col-12 text-center pt-2 d-inline-block mx-2'><FontAwesomeIcon icon={faTwitter} className="icon_fontaw"/></li>
             <li className='contact_ico_back col-12 text-center pt-2 d-inline-block mx-2'><FontAwesomeIcon icon={faFacebookF} className="icon_fontaw"/></li>
        </ul>
  </div>
  )
}
