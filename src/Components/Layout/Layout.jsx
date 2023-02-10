import React from 'react'
import Footer from '../Footer/Footer'
import Gotop from '../GoTop/Gotop'
import Header from '../Header/Header'
import Main from '../Main/Main'

export default function Layout({children}) {
  return (
    <>
        <Header/>
        <Main>
                 {children}
        </Main>
        <Gotop/>
        <Footer/>    
    </>
  )
}
