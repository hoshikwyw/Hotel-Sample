import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import { formatDate, getDayOfWeek, formatForInput } from '../assets/getDate.js'; // Import the date helper functions
import BookingModal from './BookingModal.jsx'

const RoomModal = ({ data, isModalOpen, setIsModalOpen, onBook }) => {

    // console.log(oneDayPrice);

    const [startDate, setStartDate] = useState('');
    const [startDay, setStartDay] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endDay, setEndDay] = useState('-------');
    const [totalDays, setTotalDays] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [bookingModalOpen, setBookingModalOpen] = useState(true)

    useEffect(() => {
        const oneDayPrice = data?.RoomPrice
        const defaultDate = formatForInput(Date.now()); // Format today's date for input
        const defaultDayOfWeek = getDayOfWeek(Date.now()); // Get today's day of the week
        setTotalPrice(oneDayPrice)
        setStartDate(defaultDate); // Set the default start date to today
        setStartDay(defaultDayOfWeek); // Set the start day of the week
    }, [data]);

    // Function to handle the change of the start (check-in) date
    const handleStartDateChange = (e) => {
        const newDate = e.target.value;
        setStartDate(newDate);
        const dayOfWeek = getDayOfWeek(new Date(newDate).getTime());
        setStartDay(dayOfWeek);

        if (endDate) {
            calculateTotalDays(newDate, endDate);
        }
    };

    // Function to handle the change of the end (check-out) date
    const handleEndDateChange = (e) => {
        const newDate = e.target.value;
        setEndDate(newDate);
        const dayOfWeek = getDayOfWeek(new Date(newDate).getTime());
        setEndDay(dayOfWeek);

        calculateTotalDays(startDate, newDate);
    };

    // Function to calculate total days
    const calculateTotalDays = (start, end) => {
        const startDateObj = new Date(start);
        const endDateObj = new Date(end);

        const differenceInTime = endDateObj.getTime() - startDateObj.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        setTotalDays(differenceInDays);

        if (data?.RoomPrice) {
            const calculatedPrice = differenceInDays * data.RoomPrice;
            setTotalPrice(calculatedPrice);
        }
    };

    // Function to handle booking
    const handleBooking = () => {
        if (onBook) {
            onBook(data, endDate); // Pass the room data and the check-out date to the parent component
        }
        setIsModalOpen(false); // Close the modal after booking
    };

    const handleBookingOpenModal = () => { }

    const handleBookingCloseModal = () => { }

    return (
        <>
            {isModalOpen && (
                <dialog id="my_modal_4" className="modal overflow-y-auto bg-slate-900/80 backdrop-blur-sm" open>
                    <div className="modal-box max-h-max m-auto bg-slate-800">
                        {data && (
                            <>
                                <Carousel data={data?.roomImgs} />
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-lg">Room Number: {data?.RoomNo}</h3>
                                    <div className="badge badge-outline badge-primary">Price Per One Day: ${data?.RoomPrice}</div>
                                </div>
                                <div className="flex flex-col py-3 gap-1">
                                    <p className="">Room Type : <span className='badge badge-outline badge-info'>{data?.RoomType}</span></p>
                                    <div className=" flex items-center gap-2">
                                        <p>Room Facilities : </p>
                                        {data?.RoomFancity.map((item, index) => (
                                            <div key={index} className="badge badge-outline badge-info">{item}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className=" py-2">
                                    {/* <p>Please choose how many days you are going to stay in this room</p> */}
                                    <div className=' flex items-center justify-between'>
                                        <div className=" flex flex-col items-start justify-center">
                                            <p className=' text-xs text-blue-600'>Check-in day: {startDay}</p>
                                            <input
                                                type="date"
                                                name="checkIn"
                                                id="checkIn"
                                                className='input input-sm input-bordered input-primary'
                                                value={startDate}
                                                onChange={handleStartDateChange}
                                            />
                                        </div>
                                        <div className=" flex flex-col items-start justify-center">
                                            <p className=' text-xs text-blue-600'>Check-out day: {endDay}</p>
                                            <input
                                                type="date"
                                                name="checkOut"
                                                id="checkOut"
                                                className='input input-sm input-bordered input-primary'
                                                value={endDate}
                                                onChange={handleEndDateChange}
                                            />
                                        </div>
                                    </div>
                                    <div className=" flex items-center justify-evenly my-2 py-1 border rounded-md border-blue-600">
                                        <p>Total Days: <span className=' text-blue-700 font-semibold'>{totalDays}</span> Day{totalDays > 1 ? 's' : ''}</p>
                                        <p>Total Price: <span className=' text-blue-700 font-semibold'>${totalPrice}</span></p>
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="modal-action">
                            <button className="btn btn-sm" onClick={() => setIsModalOpen(false)}>Cancel</button>
                            {/* Disable the button if endDate is not selected */}
                            <button className="btn btn-sm" onClick={handleBooking} disabled={!endDate}>
                                Booking
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
            <BookingModal onBook={handleBooking} />
        </>
    );
};

export default RoomModal;
