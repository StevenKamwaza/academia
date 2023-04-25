import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <main>
        <Navbar/>
        {children}
        <Footer/>
    </main>
  )
}
