import React, { useState } from 'react';
import Carousel from './Carousel';
import { IoPerson, IoMail } from "react-icons/io5";


const RoomCard = ({ roomData }) => {
    const [data, setData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookingModalOpen, setBookingModalOpen] = useState(true)
    const roomImg = roomData?.roomImgs[0];

    const handleMoreInfoClick = () => {
        setData(roomData);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleBookingOpenModal = () => { }

    const handleBookingCloseModal = () => { }

    return (
        <div className="card bg-slate-800 w-96 shadow-xl">
            <figure>
                <img src={roomImg} alt="Room-Image" />
            </figure>
            <div className="card-body flex flex-col gap-5">
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
                <button className="btn btn-outline btn-info" onClick={handleMoreInfoClick}>More Info</button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <dialog id="my_modal_4" className="modal overflow-y-auto py-10 bg-slate-900/80 backdrop-blur-sm" open>
                    <div className="modal-box max-h-max m-auto bg-slate-800">
                        {data && (
                            <>
                                <Carousel data={data?.roomImgs} />
                                <div className="">
                                    <h3 className="font-bold text-lg">Room Number : {data?.RoomNo}</h3>
                                    <div className="badge"></div>
                                </div>
                                <p className="py-4">Room Type : {data?.RoomType}</p>
                                <div className="py-4">
                                    <p>Room Facilities</p>
                                    {data?.RoomFancity.map((item, index) => (
                                        <div key={index} className="badge badge-outline badge-info">{item}</div>
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

            {/* Booking Modal  */}
            {bookingModalOpen && (
                <dialog id="my_modal_4" className="modal overflow-y-auto py-10 bg-slate-900/80 backdrop-blur-sm" open>
                    <div className="modal-box max-h-max m-auto bg-slate-800 w-11/12 max-w-5xl">
                        {/* {data && (
                        )} */}
                        <div className=' flex flex-col gap-5'>
                            <ul className="steps">
                                <li className="step step-primary">Choose Room</li>
                                <li className="step step-primary">Your Information</li>
                                <li className="step">Payment</li>
                                <li className="step">Receive Confirmation</li>
                            </ul>
                            <form action="" className=' w-[40%] mx-auto flex flex-col gap-2'>
                                <label className=" form-control input input-bordered flex items-center gap-2">
                                    <div className="label">
                                        <span className="label-text">What is your name?</span>
                                    </div>
                                    <div className=""></div>
                                    <IoPerson />
                                    <input type="text" className="grow" placeholder="Your Email" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <IoMail />
                                    <input type="text" className="grow" placeholder="Username" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="date" name="" id="" className='grow' placeholder='Start Date' value="" />
                                </label>
                            </form>
                        </div>
                        <div className="modal-action">
                            <button className="btn" onClick={handleBookingCloseModal}>Done</button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default RoomCard;
