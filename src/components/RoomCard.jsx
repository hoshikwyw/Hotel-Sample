import React, { useState } from 'react';
import RoomModal from './RoomModal';

const RoomCard = ({ roomData }) => {
    const [selectedRoomId, setSelectedRoomId] = useState(null); // State to store selected room id
    const roomImg = roomData?.roomImgs[0];

    const handleMoreInfoClick = () => {
        setSelectedRoomId(roomData?.id); // Set the room id when "More Info" is clicked
        document.getElementById('my_modal_4').showModal(); // Show modal
    };

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={roomImg} alt="Room-Image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title flex justify-between">
                    <span>Room Number : {roomData?.RoomNo}</span>
                    <div className="badge badge-secondary">{roomData?.RoomType}</div>
                </h2>
                <div className="card-actions justify-end">
                    {roomData?.RoomFancity?.map((fancity, index) => (
                        <div key={index} className="badge badge-outline">{fancity}</div>
                    ))}
                    <div className="badge badge-outline">${roomData?.RoomPrice}</div>
                </div>
                <button className="btn" onClick={handleMoreInfoClick}>More Info</button>
            </div>
            <RoomModal roomId={selectedRoomId} />
        </div>
    );
};

export default RoomCard;
