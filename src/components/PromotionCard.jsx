import React, { useEffect, useState } from 'react'
import ReservationForm from './ReservationForm'

const PromotionCard = ({ data, status }) => {
    const [months, setMonths] = useState([])
    const [seasonName, setSeasonName] = useState("")
    const [seasonPrice, setSeasonPrice] = useState(0)


    useEffect(() => {
        let monthArray = []
        data.map((item) => {
            monthArray.push(item.months)
            setMonths(monthArray)
            setSeasonName(item.season)
            setSeasonPrice(item.price)
        })
    }, [data])

    const handleClickButton = () => {
        document.getElementById('my_modal_4').showModal()
        console.log("clicked");
    }

    return (
        <>
            <div className={`card ${status ? "bg-primary-content" : "bg-base-300"}  text-neutral w-80 min-h-72 shadow-xl`}>
                <div className="card-body relative">

                    <h2 className={`card-title flex items-center justify-between ${status ? "text-primary" : "text-base-content/30"} text-2xl`}>
                        {seasonName} Season
                        <div className={`badge ${status ? "badge-success" : ""} `}>{status ? "Active" : "Inactive"}</div>
                    </h2>
                    <p className={` ${status ? "text-base-content" : "text-base-content/30"}`}>{seasonName} Season Months and Standard Price</p>
                    <div className="card-actions justify-start py-3">
                        <div className="flex flex-wrap items-center">
                            <span className={`${status ? "text-base-content" : "text-base-content/30"} pe-1 font-semibold`}>Months : </span>
                            {months.map((item, index) => (
                                <div key={index} className='flex items-center gap-1'>
                                    <div className={` badge badge-outline border-0 p-0 ${status ? "text-primary" : "text-base-content/30"}`}>{item}</div>
                                    <div className={`${status ? "text-primary" : "text-base-content/30"} pe-1`}>{index === months.length - 1 ? "" : " , "}</div>
                                </div>
                            ))}
                        </div>
                        <div className="">
                            <span className={`${status ? "text-base-content" : "text-base-content/30"} pe-1 font-semibold`}>Price : </span>
                            <span className={`${status ? "text-primary" : "text-base-content/30"} `}>{seasonPrice} Won </span>
                            <span className={`${status ? "text-base-content" : "text-base-content/30"} text-xs`}>For One Person / Day </span>
                        </div>
                    </div>
                    <button onClick={handleClickButton} className={`btn  ${status ? "btn-primary btn-outline" : " no-animation btn-disabled btn-neutral text-neutral btn-outline"}`}>{status ? "Get This Plan" : "This course is currently unavailable if you want this course you can register for next season"}</button>
                </div>
            </div>
            <ReservationForm data={data} />
        </>
    )
}

export default PromotionCard