import React from 'react'
import BookedRoom from '../components/BookedRoom'
import SingleRooms from '../components/SingleRooms'
import DoubleRooms from '../components/DoubleRooms'
import TwinRooms from '../components/TwinRooms'
import FamilyRooms from '../components/FamilyRooms'
import SuiteRooms from '../components/SuiteRooms'

const Rooms = () => {
    return (
        <div id='rooms'>
            <div className="divider">Single Rooms</div>
            <div className="">
                <SingleRooms />
            </div>
            <div className="divider">Double Rooms</div>
            <div className="">
                <DoubleRooms />
            </div>
            <div className="divider">Twin Rooms</div>
            <div className="">
                <TwinRooms />
            </div>
            <div className="divider">Family Rooms</div>
            <div className="">
                <FamilyRooms />
            </div>
            <div className="divider">Suite Rooms</div>
            <div className="">
                <SuiteRooms />
            </div>
        </div>
    )
}

export default Rooms