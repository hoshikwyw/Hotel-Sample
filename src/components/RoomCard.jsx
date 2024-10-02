import React, { useState } from 'react';
import Carousel from './Carousel';
import { IoPerson, IoMail } from "react-icons/io5";
import RoomModal from './RoomModal';


const RoomCard = ({ roomData }) => {
    const [data, setData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const roomImg = roomData?.roomImgs;

    const handleMoreInfoClick = () => {
        // setData(roomData);
        // setIsModalOpen(true);
        console.log("Just clicked");

    };

    // This function will handle the booking and receive the data from RoomModal
    const handleBooking = (roomDetails, checkOutDate, checkInDate) => {
        console.log("Room is booked:", roomDetails);
        console.log("Check-out Date:", checkOutDate);
    };



    return (
        // <div className="card bg-slate-800 w-96 shadow-xl my-5">
        //     <figure>
        //         <img src={roomImg} alt="Room-Image" />
        //     </figure>
        //     <div className="card-body flex flex-col gap-5">
        //         <h2 className="card-title flex justify-between">
        //             {/* <span>Room Number : {roomData?.RoomNo}</span> */}
        //             <div className="badge badge-secondary">{roomData?.RoomType}</div>
        //             <div className="badge badge-secondary">${roomData?.RoomPrice}</div>
        //         </h2>
        //         <div className="">
        //             <p className=' text-primary-content'>BD House (Lakeside)</p>
        //             <p className=' text-primary-content'>10 rooms available</p>
        //         </div>
        //         <div className="card-actions justify-end">
        //             {roomData?.RoomFancity && (
        //                 <div className=' flex gap-1 items-center'>
        //                     {roomData.RoomFancity.slice(0, 3).map((fancity, index) => (
        //                         <div key={index} className="badge badge-outline">{fancity}</div>
        //                     ))}
        //                     {roomData.RoomFancity.length > 3 && (
        //                         <div className="badge badge-outline">
        //                             +{roomData.RoomFancity.length - 3} more
        //                         </div>
        //                     )}
        //                 </div>
        //             )}
        //         </div>
        //         <button className="btn btn-outline btn-info btn-sm" onClick={handleMoreInfoClick}>More Info</button>
        //     </div>

        //     {/* Modal */}
        //     <RoomModal data={data} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onBook={handleBooking} />

        //     {/* Booking Modal  */}

        // </div>
        <div className="card lg:card-side bg-base-100 shadow-xl my-10">
            <div className=' w-[60%]'>
                {/* <img
                    src={roomData.roomImgs}
                    alt="Album" className=' w-full' /> */}
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/qemqQHaeCYo?autoplay=1&mute=1&loop=1&playlist=qemqQHaeCYo&controls=0&modestbranding=1&showinfo=0&rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; loop; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>

            </div>
            <div className="card-body w-[40%]">
                <div className=" w-full">
                    <div className="carousel w-full h-full">
                        <div id="item1" className="carousel-item w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                className="w-full" />
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                                className="w-full" />
                        </div>
                        <div id="item3" className="carousel-item w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                                className="w-full" />
                        </div>
                        <div id="item4" className="carousel-item w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                                className="w-full" />
                        </div>
                    </div>
                    <div className="flex w-full h-full justify-center gap-2 py-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div>
                </div>
                <h2 className="card-title mt-10">BD House (Lakeside) </h2>
                <p>Click the button to read more.</p>
                <div className=" flex gap-2">
                    <div className="badge badge-info text-info-content badge-lg">Luxury</div>
                    <div className="badge badge-info text-info-content badge-lg">5 rooms available</div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">More Info</button>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
