import React, { useEffect, useState } from 'react'
import PromotionCard from '../components/PromotionCard'
import { PromotionPlans } from "../assets/fakeDatas/PromotionsPlan"
import SeasonalPlanCard from '../components/SeasonalPlanCard'

const Promotions = () => {
    const data = PromotionPlans
    const [lowSeasons, setLowSeasons] = useState([])
    const [lowSeasonStatus, setLowSeasonStatus] = useState(true)
    const [mediumSeasons, setMediumSeasons] = useState([])
    const [mediumSeasonStatus, setMediumSeasonStatus] = useState(false)
    const [highSeasons, setHighSeasons] = useState([])
    const [highSeasonStatus, setHighSeasonStatus] = useState(true)

    const getSeasonStatus = (seasonMonth) => {
        const currentMonth = new Date().getMonth() // Get current month (0 for Jan, 11 for Dec)
        if (currentMonth > seasonMonth) {
            return true; // If the current month is greater, set to true
        } else if (currentMonth === seasonMonth) {
            return false; // If the current month is equal, set to false
        } else {
            return false; // If the current month is less, set to false
        }
    }

    useEffect(() => {
        let low = []
        let medium = []
        let high = []

        data.forEach((item) => {
            const seasonMonth = item.monthIdx; // Assuming each item has a 'month' property for the season's month
            if (item.season === "Low") {
                low.push(item)
                setLowSeasonStatus(getSeasonStatus(seasonMonth)) // Set low season status based on month
            } else if (item.season === "Medium") {
                medium.push(item)
                setMediumSeasonStatus(getSeasonStatus(seasonMonth)) // Set medium season status based on month
            } else if (item.season === "High") {
                high.push(item)
                setHighSeasonStatus(getSeasonStatus(seasonMonth)) // Set high season status based on month
            }
        })

        setLowSeasons(low)
        setMediumSeasons(medium)
        setHighSeasons(high)
    }, [data])


    return (
        <div className='flex flex-col items-center justify-center w-full'>


            <div role="tablist" className="tabs tabs-boxed w-[90%] tabs-lg bg-transparent">

                <input type="radio" name="my_tabs_2" role="tab" className="tab w-full text-nowrap border border-b-0 border-base-300 roounded-t-box" aria-label="Determination of 3 seasons" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-b-box p-6">
                    <div className="flex w-full justify-center items-center gap-8 flex-wrap">
                        {lowSeasons.length > 0 && <PromotionCard data={lowSeasons} status={lowSeasonStatus} />}
                        {mediumSeasons.length > 0 && <PromotionCard data={mediumSeasons} status={mediumSeasonStatus} />}
                        {highSeasons.length > 0 && <PromotionCard data={highSeasons} status={highSeasonStatus} />}
                    </div>
                </div>
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab w-full text-nowrap border border-b-0 border-base-300 roounded-t-box"
                    aria-label="Seasonal Promotions"
                    defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-b-box p-6">
                    <p className='text-info py-5 text-2xl'>Make reservations for next season in advance and pay in full</p>
                    <div className="flex w-full justify-center items-center gap-8 flex-wrap">
                        <SeasonalPlanCard data={lowSeasons} />
                        <SeasonalPlanCard data={lowSeasons} />
                        <SeasonalPlanCard data={lowSeasons} />
                    </div>
                    <p className='text-info py-5 text-2xl'>Make reservations <span className='text-error text-3xl'>3 months</span> in advance and pay in full </p>
                    <div className="flex w-full justify-center items-center gap-8 flex-wrap">
                        <SeasonalPlanCard data={lowSeasons} />
                        <SeasonalPlanCard data={lowSeasons} />
                        <SeasonalPlanCard data={lowSeasons} />
                    </div>
                    <p className='text-info py-5 text-2xl'>Make reservations <span className='text-error text-3xl'>2 months</span> in advance and pay in full </p>
                    <div className="flex w-full justify-center items-center gap-8 flex-wrap">
                        <SeasonalPlanCard data={lowSeasons} />
                        <SeasonalPlanCard data={lowSeasons} />
                        <SeasonalPlanCard data={lowSeasons} />
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-nowrap border border-b-0 border-base-300 roounded-t-box" aria-label="Membership Promotions" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-b-box p-6">
                    <div>
                        <p className='text-info text-2xl'>Our 9 Million Won membership Details Below</p>
                        <div className=" w-full mx-auto flex justify-center items-center h-full">
                            <img src="/membership.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotions
