import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Slides from '../../Components/Slides/Slides'

export default function Home() {
  return (
    <Layout>
      <div className='container'>
        <Slides/>
      </div>
    </Layout>
  )
}
