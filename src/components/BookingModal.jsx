import React from 'react'
import Carousel from './Carousel';

const BookingModal = (props) => {
  const { startDate, startDay, endDate, endDay, totalDays, totalPrice, bookingModalOpen, setBookingModalOpen, data, onBook } = props
  console.log(data);

  return (
    <>
      {bookingModalOpen && (
        <dialog id="my_modal_4" className="modal overflow-y-auto bg-slate-900/80 backdrop-blur-sm w-full" open>
          <div className="modal-box max-h-max m-auto bg-slate-800 w-11/12 max-w-5xl border border-yellow-200">
            {data && (
              <div className=' flex flex-row items-center justify-evenly'>
                <div className=" w-[50%]">
                  <Carousel data={data?.roomImgs} />
                  <div className="">
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
                  </div>
                </div>

                <div className=" flex items-center justify-evenly my-2 py-1 border rounded-md border-blue-600 w-[50%]">
                  <p>Total Days: <span className=' text-blue-700 font-semibold'>{totalDays}</span> Day{totalDays > 1 ? 's' : ''}</p>
                  <p>Total Price: <span className=' text-blue-700 font-semibold'>${totalPrice}</span></p>
                </div>
                {/* </div> */}
              </div>
            )}
            <div className="modal-action">
              <button className="btn btn-sm" >Cancel</button>
              {/* Disable the button if endDate is not selected */}
              <button className="btn btn-sm" disabled={!endDate}>
                Booking
              </button>
            </div>
          </div>
        </dialog >
      )}
    </>
  )
}

export default BookingModal