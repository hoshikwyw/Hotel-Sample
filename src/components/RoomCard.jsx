import React, { useState } from 'react';
import Carousel from './Carousel';

const RoomCard = ({ roomData }) => {
    const [data, setData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const roomImg = roomData?.roomImgs[0];

    const handleMoreInfoClick = () => {
        setData(roomData);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handlePaymentOpenModal = () => {}

    const handlePaymentCloseModal = () => {}

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

            {/* Modal */}
            {isModalOpen && (
                <dialog id="my_modal_4" className="modal overflow-y-auto py-10" open>
                    <div className="modal-box max-h-max m-auto">
                        {data && (
                            <>
                                <Carousel data={data?.roomImgs} />
                                <h3 className="font-bold text-lg">Room Number : {data?.RoomNo}</h3>
                                <p className="py-4">Room Type : {data?.RoomType}</p>
                                <div className="py-4">
                                    <p>Room Facilities</p>
                                    {data?.RoomFancity.map((item, index) => (
                                        <div key={index} className="badge badge-outline">{item}</div>
                                    ))}
                                </div>
                            </>
                        )}
                        <div className="modal-action">
                            <button className="btn" onClick={handleCloseModal}>Cancel</button>
                            <button className="btn" onClick={handleCloseModal}>Booking</button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default RoomCard;
