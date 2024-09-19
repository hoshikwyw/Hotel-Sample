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
    }, []);

    return (
        <dialog id="my_modal_4" className="modal overflow-y-auto py-10">
            <div className="modal-box max-h-max m-auto">
                <Carousel data={data?.roomImgs} />
                <h3 className="font-bold text-lg">Room Number : {data?.RoomNo}</h3>
                <p className="py-4">Room Type : {data?.RoomType}</p>
                <div className="py-4">
                    <p>Room Facilities</p>
                    {data?.RoomFancity.map((item, index) => (
                        <div key={index} className="badge badge-outline">{item}</div>
                    ))}
                </div>
                <div className="modal-action">
                    <form method="dialog" >
                        <button className="btn">Cancel</button>
                    </form>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
            </form>
        </dialog>
    );
};

export default RoomModal;
