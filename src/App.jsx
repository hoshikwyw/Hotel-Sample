import React from 'react'
import Hero from './sections/Hero'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'
import Promotions from './sections/Promotions'
import GolfCourse from './components/GolfCourse'
import RoomCard from './components/RoomCard'
import Forum from './components/Forum'
// import Rooms from './sections/Rooms'

const App = () => {
  const roomData = {
    roomImgs: "/bed.jpg",
    RoomPrice: "200",
    RoomType: "Deluxe Room"
  };

  return (
    <div className=' relative'>
      <div className=" fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <Hero />
      <div className=" w-[90%] mx-auto py-10" id='promotions'>
        <div className=" divider divider-start w-full text-5xl underline text-primary pb-5">Promotions</div>
        <Promotions />
      </div>
      <div className=" w-[90%] mx-auto py-10 " id='golf'>
        <div className=" divider divider-start w-full text-5xl underline text-primary pb-5">Golf Course Information</div>
        <GolfCourse />
      </div>
      <div className=" w-[90%] mx-auto py-10 " id='resorts'>
        <div className=" divider divider-start w-full text-5xl underline text-primary pb-5">Our Resorts and Residences</div>
        <RoomCard roomData={roomData} />
        <RoomCard roomData={roomData} />
        <RoomCard roomData={roomData} />
        <RoomCard roomData={roomData} />
        <RoomCard roomData={roomData} />
      </div>
      <div className=" w-[90%] mx-auto py-10 " id='forum'>
        <div className=" divider divider-start w-full text-5xl underline text-primary pb-5">Forum for all Customers</div>
        <Forum />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default App