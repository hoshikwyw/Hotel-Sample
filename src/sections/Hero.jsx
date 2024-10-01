import React from 'react'

const Hero = () => {
    return (
        <div id='hero'
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(/hero.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className=" mb-5 text-5xl font-semibold text-white">Bueng Aram Golf & Country Club</h1>
                    <p className="mb-2">
                    (Daeho CC., Kalasin, Thailand.) 
                    </p>
                    <p className="mb-5">
                    010 9295 8868
                    </p>
                    <button className="btn btn-primary">Make Booking</button>
                </div>
            </div>
        </div>
    )
}

export default Hero