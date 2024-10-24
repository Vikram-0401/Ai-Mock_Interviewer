import React from 'react'
import Header from './_components/Header'

function DashbaordLayout({children}) {
  return (
    <div>
      <Header/>
      <div className='mx-5 md:mx-20 lg:mx-30'>
      {children}
      </div>
     
    </div>
  )
}

export default DashbaordLayout