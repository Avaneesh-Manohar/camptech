import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Nav from './Nav'
import Support from './Support'

function Help() {
    return (
        <div className='help'>
            <Nav />
      <div className="flex">
        <Hero />
        <Support />
      </div>
      <Footer />
        </div>
    )
}

export default Help
