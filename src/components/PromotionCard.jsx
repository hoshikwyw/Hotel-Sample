import React, { useEffect, useState } from 'react'

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

    return (
        <div className="card bg-neutral text-neutral-content w-80 min-h-72 shadow-xl">
            <div className="card-body">
                <h2 className="card-title flex items-center justify-between text-primary text-2xl">
                    {seasonName} Season
                    <div className={`badge ${status ? "badge-success" : ""} `}>{status ? "Active" : "Inactive"}</div>
                </h2>
                <p>{seasonName} Season Months and Standard Price</p>
                <div className="card-actions justify-start py-3">
                    <div className="flex flex-wrap items-center">
                        <span className=' pe-1 font-semibold'>Months : </span>
                        {months.map((item, index) => (
                            <div key={index} className='flex items-center gap-1'>
                            <div className=" badge badge-outline border-0 p-0 text-info">{item}</div>
                            <div className=" pe-1">{index === months.length - 1 ? "" : " , "}</div>
                            </div>
                        ))}
                    </div>
                    <div className="">
                        <span className=' pe-1 font-semibold'>Price : </span>
                        <span className=' text-info'>{seasonPrice} Won </span>
                        <span className=' text-xs'>For One Person / Day </span>
                    </div>
                </div>
                <button className={`btn  ${status ? "btn-info btn-outline" : "btn-disabled btn-ghost"}`}>Get this Plan</button>
            </div>
        </div>
    )
}

export default PromotionCard