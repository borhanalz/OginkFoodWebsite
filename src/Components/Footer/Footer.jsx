import React from 'react'
import FooterContacts from './FooterContacts'
import FooterLogo from './FooterLogo'
import FooterSwitchMenu from './FooterSwitchMenu'

export default function Footer() {
  return (
    <footer className='mt-3'>
        <div className="container mt-4 pb-3">
            <FooterLogo/>
            <FooterSwitchMenu/>
            <FooterContacts/>
        </div>
    </footer>
  )
}
