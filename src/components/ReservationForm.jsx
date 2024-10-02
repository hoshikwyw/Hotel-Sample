import React, { useCallback, useEffect, useRef, useState } from 'react'
import { HiUser, HiPhone, HiUserGroup } from "react-icons/hi";
import { FaPlaneArrival, FaPlaneDeparture, FaRegNewspaper, FaCalendarDay } from "react-icons/fa6";
import { toPng } from 'html-to-image';


const ReservationForm = ({ data }) => {
    const imgRef = useRef(null);
    const [months, setMonths] = useState([]);
    const [seasonName, setSeasonName] = useState("");
    const [seasonPrice, setSeasonPrice] = useState(0);
    const [tabIndex, setTabIndex] = useState(0); // Track the active collapse
    const [modalData, setModalData] = useState(null);
    // console.log("Modal data:", modalData);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        numberOfCustomers: "",
        arrivalDate: "",
        arrivalDetails: "",
        departureDate: "",
        departureDetails: "",
        duration: "",
        deposit: "",
        accompanyingNames: "",
        additionalInfo: ""
    });

    useEffect(() => {
        let monthArray = []
        data.map((item) => {
            monthArray.push(item.months);
            setMonths(monthArray);
            setSeasonName(item.season);
            setSeasonPrice(item.price);
        });
    }, [data]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleClickSend = () => {
        localStorage.setItem("reservationFormData", JSON.stringify(formData));
        setTabIndex(1);
    };

    const handlePaymentMethod = () => {
        localStorage.setItem("reservationFormData", JSON.stringify(formData));
        const modal = document.getElementById('my_modal_4');
        const modal2 = document.getElementById('my_modal_3');
        if (modal) {
            modal.close();
        }
        if (modal2) {
            modal2.showModal();
            const storedData = localStorage.getItem("reservationFormData");
            if (storedData) {
                setModalData(JSON.parse(storedData));

            }

        }

        console.log('Payment method chosen, form data stored, and modal closed.');
    };

    const onDownloadButtonClick = useCallback(() => {
        if (imgRef.current === null) {
            return
        }
        toPng(imgRef.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement("a")
                link.download = 'golf-invoice.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err);

            })
    }, [imgRef])

    return (
        <>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-2xl text-center mb-2">Make your reservation</h3>
                    <div className="flex justify-center items-start gap-5">
                        {/* Collapse Section */}
                        <div className=" flex flex-col w-[60%] gap-3">
                            <div tabIndex={0} className={`collapse ${tabIndex === 0 ? 'collapse-open' : ''} bg-base-200`}>
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">Your Information</div>
                                <div className="collapse-content">
                                    <form className='w-full mx-auto'>
                                        <label className="input input-bordered flex items-center gap-2 mb-2">
                                            <HiUser />
                                            <input
                                                type="text"
                                                className="grow"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Name & Family Name"
                                            />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2 mb-2">
                                            <HiPhone />
                                            <input
                                                type='tel'
                                                className="grow"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone Number"
                                            />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2 mb-2">
                                            <HiUserGroup />
                                            <input
                                                type="number"
                                                className="grow"
                                                name="numberOfCustomers"
                                                value={formData.numberOfCustomers}
                                                onChange={handleChange}
                                                placeholder='Numbers of accompanying customers'
                                            />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2 mb-2">
                                            <FaPlaneArrival />
                                            <input
                                                type="date"
                                                className="grow"
                                                name="arrivalDate"
                                                value={formData.arrivalDate}
                                                onChange={handleChange}
                                                placeholder='Arrival Date'
                                            />
                                        </label>
                                        <div className="w-full">
                                            <textarea
                                                className="textarea textarea-xs textarea-bordered w-full text-base"
                                                name="arrivalDetails"
                                                value={formData.arrivalDetails}
                                                onChange={handleChange}
                                                placeholder="Arrival Flight Details"
                                            ></textarea>
                                        </div>
                                        <label className="input input-bordered flex items-center gap-2 mb-2">
                                            <FaPlaneDeparture />
                                            <input
                                                type="date"
                                                className="grow"
                                                name="departureDate"
                                                value={formData.departureDate}
                                                onChange={handleChange}
                                                placeholder='Departure Date'
                                            />
                                        </label>
                                        <div className="w-full">
                                            <textarea
                                                className="textarea textarea-xs textarea-bordered w-full text-base"
                                                name="departureDetails"
                                                value={formData.departureDetails}
                                                onChange={handleChange}
                                                placeholder="Departure Flight Details"
                                            ></textarea>
                                        </div>
                                        <label className="input input-bordered flex items-center gap-2 mb-2">
                                            <FaCalendarDay />
                                            <input
                                                type="number"
                                                className="grow"
                                                name="duration"
                                                value={formData.duration}
                                                onChange={handleChange}
                                                placeholder='Duration of stay'
                                            />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2 mb-2">
                                            <FaCalendarDay />
                                            <input
                                                type="number"
                                                className="grow"
                                                name="deposit"
                                                value={formData.deposit}
                                                onChange={handleChange}
                                                placeholder='Deposit (Please Describe)'
                                            />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2 mb-2">
                                            <FaCalendarDay />
                                            <input
                                                type="text"
                                                className="grow"
                                                name="accompanyingNames"
                                                value={formData.accompanyingNames}
                                                onChange={handleChange}
                                                placeholder='Names of all the accompanying customers'
                                            />
                                        </label>
                                        <div className="w-full">
                                            <textarea
                                                className="textarea textarea-xs textarea-bordered w-full text-base"
                                                name="additionalInfo"
                                                value={formData.additionalInfo}
                                                onChange={handleChange}
                                                placeholder="Anything you want to tell us"
                                            ></textarea>
                                        </div>
                                    </form>
                                    <button className='btn btn-primary btn-outline' onClick={handleClickSend}>
                                        Send
                                    </button>
                                </div>
                            </div>
                            {/* Second Collapse Section */}
                            <div tabIndex={1} className={`collapse ${tabIndex === 1 ? 'collapse-open' : ''} bg-base-200`}>
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">Choose Payment</div>
                                <div className="collapse-content">
                                    <div role="tablist" className="tabs tabs-bordered w-full">
                                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-sm text-nowrap" aria-label="Payment 1" />
                                        <div role="tabpanel" className="tab-content p-10">
                                            <p>
                                                Deposit 200,000 Won./Person each to the following Bank Account. And pay
                                                the rest 80% in cash at the golf course.
                                            </p>
                                            <button className=' btn btn-primary btn-outline' onClick={handlePaymentMethod}>Pay with this method</button>
                                        </div>
                                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-sm text-nowrap" aria-label="Payment2" defaultChecked />
                                        <div role="tabpanel" className="tab-content p-10">
                                            <p>
                                                Deposit 100% Tour Fee in advance to the following Bank Account. And get
                                                the special discounts as announced in the seasonal promotion section.
                                            </p>
                                            <button className=' btn btn-primary btn-outline' onClick={handlePaymentMethod}>Pay with this method</button>
                                        </div>
                                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-sm text-nowrap" aria-label="Payment 3" />
                                        <div role="tabpanel" className="tab-content p-10">
                                            <p>
                                                Will pat in full at the golf course by Card. (EDC Machine is available for
                                                payments by cards ad the golf course).
                                            </p>
                                            <button className=' btn btn-primary btn-outline' onClick={handlePaymentMethod}>Pay with this method</button>
                                        </div>
                                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-sm text-nowrap" aria-label="Payment 4" />
                                        <div role="tabpanel" className="tab-content p-10">
                                            <p>
                                                I am a member and I will pay according to the members’ payment methods at
                                                the golf course.
                                            </p>
                                            <button className=' btn btn-primary btn-outline' onClick={handlePaymentMethod}>Pay with this method</button>
                                        </div>
                                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-sm text-nowrap" aria-label="Payment 5" />
                                        <div role="tabpanel" className="tab-content p-10">
                                            <p>
                                                Request your payment link at 010 9295 8868
                                            </p>
                                            <button className=' btn btn-primary btn-outline' onClick={handlePaymentMethod}>Pay with this method</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Summary Section */}
                        <div className="w-[50%]">
                            <div className={`card glass text-neutral w-full min-h-72 shadow-xl`}>
                                <div className="card-body relative">
                                    <h2 className={`card-title flex items-center text-primary text-xl`}>
                                        <span>You have chosen</span> {seasonName} Season
                                    </h2>
                                    <div className="card-actions justify-start py-3">
                                        <div className="flex flex-wrap items-center">
                                            <span className={`text-base-content pe-1 font-semibold`}>Including Months : </span>
                                            {months.map((item, index) => (
                                                <div key={index} className='flex items-center gap-1'>
                                                    <div className={`badge badge-outline border-0 p-0 text-primary`}>{item}</div>
                                                    <div className={`text-primary pe-1`}>{index === months.length - 1 ? "" : " , "}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="">
                                            <span className={`text-base-content pe-1 font-semibold`}>Price for one person per day : </span>
                                            <span className={`text-primary `}>{seasonPrice} Won </span>
                                        </div>
                                    </div>
                                    {/* <button className={`btn btn-primary btn-outline`}>Get This Plan</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
                <label className="modal-backdrop bg-black/40 backdrop-blur" htmlFor="my_modal_4"></label>

            </dialog>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div ref={imgRef} className=' bg-white padding-5'>
                        <h3 className="font-bold text-lg text-success">Your Reservation is Success !!</h3>
                        <p className="py-4">Your Name : {modalData?.name}</p>
                        <p className="py-4">Your Phone Number : {modalData?.phone}</p>
                        <p className="py-4">Member of your team : {modalData?.numberOfCustomers}</p>
                        <p className="py-4">Your Arrival Date : {modalData?.arrivalDate}</p>
                        <p className="py-4">Your Departure Date : {modalData?.departureDate}</p>
                        <p className="py-4">Your Deposit Amount : {modalData?.deposit}</p>
                        <p className="py-4">Your Duration : {modalData?.duration}</p>
                        <p className="py-4">Your Additional Note : {modalData?.additionalInfo}</p>
                        <p className="py-4">Your Plan : {seasonName} Season</p>
                    </div>
                    <button className=' btn btn-primary' onClick={onDownloadButtonClick}>Download this invoice</button>
                </div>
                <label className="modal-backdrop bg-black/30 backdrop-blur" htmlFor="my_modal_3"></label>
            </dialog>

        </>
    );
}

export default ReservationForm;
