import React, { useEffect, useState } from 'react'
import PromotionCard from '../components/PromotionCard'
import { PromotionPlans } from "../assets/fakeDatas/PromotionsPlan"

const Promotions = () => {
    const data = PromotionPlans
    const [lowSeasons, setLowSeasons] = useState([])
    const [mediumSeasons, setMediumSeasons] = useState([])
    const [highSeasons, setHighSeasons] = useState([])

    useEffect(() => {
        let low = []
        let medium = []
        let high = []

        data.forEach((item) => {
            if (item.season === "Low") {
                low.push(item)
            } else if (item.season === "Medium") {
                medium.push(item)
            } else if (item.season === "High") {
                high.push(item)
            }
        })

        setLowSeasons(low)
        setMediumSeasons(medium)
        setHighSeasons(high)


    }, [data])


    return (
        <div>
            <div className="divider text-2xl pb-5">Promotion Plans</div>
            <div className="flex w-full justify-center items-center gap-8">
                {lowSeasons.length > 0 && <PromotionCard data={lowSeasons} />}
                {mediumSeasons.length > 0 && <PromotionCard data={mediumSeasons} />}
                {highSeasons.length > 0 && <PromotionCard data={highSeasons} />}
            </div>
        </div>
    )
}

export default Promotions
