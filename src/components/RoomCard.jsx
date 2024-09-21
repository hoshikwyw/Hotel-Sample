import React, { useState } from 'react';
import Carousel from './Carousel';
import { IoPerson, IoMail } from "react-icons/io5";
import RoomModal from './RoomModal';


const RoomCard = ({ roomData }) => {
    const [data, setData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const roomImg = roomData?.roomImgs[0];

    const handleMoreInfoClick = () => {
        setData(roomData);
        setIsModalOpen(true);
    };

    // This function will handle the booking and receive the data from RoomModal
    const handleBooking = (roomDetails, checkOutDate) => {
        console.log("Room is booked:", roomDetails);
        console.log("Check-out Date:", checkOutDate);

        // Perform any further action here, such as updating the state or sending the data to a server
    };



    return (
        <div className="card bg-slate-800 w-96 shadow-xl">
            <figure>
                <img src={roomImg} alt="Room-Image" />
            </figure>
            <div className="card-body flex flex-col gap-5">
                <h2 className="card-title flex justify-between">
                    <span>Room Number : {roomData?.RoomNo}</span>
                    <div className="badge badge-secondary">{roomData?.RoomType}</div>
                    <div className="badge badge-secondary">${roomData?.RoomPrice}</div>
                </h2>
                <div className="card-actions justify-end">
                    {roomData?.RoomFancity && (
                        <div className=' flex gap-1 items-center'>
                            {roomData.RoomFancity.slice(0, 3).map((fancity, index) => (
                                <div key={index} className="badge badge-outline">{fancity}</div>
                            ))}
                            {roomData.RoomFancity.length > 3 && (
                                <div className="badge badge-outline">
                                    +{roomData.RoomFancity.length - 3} more
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <button className="btn btn-outline btn-info btn-sm" onClick={handleMoreInfoClick}>More Info</button>
            </div>

            {/* Modal */}
            <RoomModal data={data} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onBook={handleBooking} />

            {/* Booking Modal  */}

        </div>
    );
};

export default RoomCard;
