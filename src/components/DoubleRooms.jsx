import React, { useEffect, useState } from 'react'
import RoomCard from './RoomCard'
import { rooms } from "../assets/Rooms.js"

const DoubleRooms = () => {

  const [room, setRooms] = useState([])

  useEffect(() => {
    const filteredRooms = rooms.filter(item => item.RoomType === "Double")
    setRooms(filteredRooms)
  }, [])

  return (
    <div id='double' className=' flex flex-wrap gap-10 justify-center items-center'>
      {room.map((data, index) => (
        <RoomCard key={index} roomData={data} />
      ))}
    </div>
  )
}

export default DoubleRooms