import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import { rooms } from "../assets/Rooms";

const RoomModal = ({ roomId }) => {
    const [data, setData] = useState()
    console.log(data);

    useEffect(() => {
        if (roomId) {
            const roomDetails = rooms.find((room) => room.id === roomId);
            setData(roomDetails)
        }
    }, [roomId]);

    return (
        <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <Carousel data={data} />
                <h3 className="font-bold text-lg">Room Details</h3>
                <p className="py-4">Room ID: {data?.RoomNo}</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Cancel</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default RoomModal;
