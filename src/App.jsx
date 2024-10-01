import React from 'react'
import Hero from './sections/Hero'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'
import Promotions from './sections/Promotions'
// import Rooms from './sections/Rooms'

const App = () => {
  return (
    <div className=' relative'>
      <div className=" fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <Hero />
      <div className=" px-5 py-10">
      <Promotions />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default App