import React from 'react'
import BookedRoom from '../components/BookedRoom'
import SingleRooms from '../components/SingleRooms'
import DoubleRooms from '../components/DoubleRooms'

const Rooms = () => {
    return (
        <div id='rooms'>
            <div className="divider">Single Bed Rooms</div>
            <div className="">
                <SingleRooms />
            </div>
            <div className="divider">Double Bed Rooms</div>
            <div className="">
                <DoubleRooms />
            </div>
        </div>
    )
}

export default Rooms