import React from 'react'
import Header from './Header'
import Footer from './Footer'
function DefaultLayout({children}) {
  return (
    <div className='defaultLayout'>              
        <div className='container'>
            {children}
        </div>        
        {/* <Footer /> */}
    </div>
  )
}

export default DefaultLayout