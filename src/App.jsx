import React from 'react'
import Hero from './sections/Hero'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'
import Rooms from './sections/Rooms'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Rooms />
      <Footer />
    </div>
  )
}

export default App