import React, { useEffect, useState } from 'react'

const PromotionCard = ({ data }) => {
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
                <h2 className="card-title text-primary text-3xl">
                    {seasonName} Season
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>{seasonName} Season Months and Standard Price</p>
                <div className="card-actions justify-start py-3">
                    {months.map((item, index) => (
                        <div key={index} className="btn btn-xs btn-outline">{item}</div>
                    ))}
                </div>
                <button className="btn btn-info">{seasonPrice} Won For One Person/Day</button>
            </div>
        </div>
    )
}

export default PromotionCard