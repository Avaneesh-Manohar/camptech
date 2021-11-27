import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Nav from './Nav'
import Quiz from './Quiz'

function Quizzes() {
    return (
        <div className='help'>
            <Nav />
      <div className="flex">
        <Hero />
        <Quiz />
      </div>
      <Footer />
        </div>
    )
}

export default Quizzes