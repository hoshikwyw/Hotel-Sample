import React, { useEffect, useState } from 'react'

const SeasonalPlanCard = ({data}) => {
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
        <div className="card bg-primary-content text-neutral w-80 min-h-72 shadow-xl">
            <div className="card-body flex flex-col justify-between">
                <div className=" flex flex-col">
                    <div className=" flex items-center justify-between relative">
                        <div className=" flex items-center font-semibold">
                            <h2 className=' line-through text-base-content'>50,000 Won</h2> /
                            <h2 className=' text-primary'>40,000 Won</h2>
                        </div>
                        <div className="badge badge-secondary text-secondary-content badge-lg absolute -top-5 -right-5 shadow-sm">20% OFF</div>
                    </div>
                    <h2 className=' text-xs text-info-content'>for one person per day</h2>
                </div>
                <h2 className="card-title flex items-center justify-between text-primary text-xl">
                    Low Season
                </h2>
                <div className="flex flex-wrap items-center">
                        <span className=' pe-1 font-semibold'>Months : </span>
                        {months.map((item, index) => (
                            <div key={index} className='flex items-center gap-1'>
                            <div className=" badge badge-outline border-0 p-0 text-primary">{item}</div>
                            <div className=" pe-1">{index === months.length - 1 ? "" : " , "}</div>
                            </div>
                        ))}
                    </div>
                <button className="btn btn-primary btn-outline">Get this plan</button>
            </div>
        </div>
    )
}

export default SeasonalPlanCard