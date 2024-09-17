import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Function for smooth scrolling with custom duration
    const handleScrollToSection = (event, id, duration = 1000) => {
        event.preventDefault() // Prevent the default anchor link behavior
        const element = document.querySelector(id)

        if (element) {
            const start = window.scrollY
            const targetPosition = element.getBoundingClientRect().top + window.scrollY
            const distance = targetPosition - start
            let startTime = null

            const easeInOutQuad = (time, from, distance, duration) => {
                time /= duration / 2
                if (time < 1) return distance / 2 * time * time + from
                time--
                return -distance / 2 * (time * (time - 2) - 1) + from
            }

            const animateScroll = currentTime => {
                if (startTime === null) startTime = currentTime
                const timeElapsed = currentTime - startTime
                const run = easeInOutQuad(timeElapsed, start, distance, duration)

                window.scrollTo(0, run)

                if (timeElapsed < duration) {
                    requestAnimationFrame(animateScroll)
                }
            }

            requestAnimationFrame(animateScroll)
        }
    }

    return (
        <div className={`navbar fixed w-full top-0 left-0 z-10 transition-colors duration-300 ease-in-out ${scrollPosition > 0 ? 'bg-base-300' : 'bg-transparent'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a href="#hero" onClick={(e) => handleScrollToSection(e, '#hero', 1000)}>Home</a></li>
                        <li>
                            <a>Rooms</a>
                            <ul className="p-2">
                                <li><a href="#double" onClick={(e) => handleScrollToSection(e, '#double', 1000)}>Double Bed</a></li>
                                <li><a href="#single" onClick={(e) => handleScrollToSection(e, '#single', 1000)}>Single Bed</a></li>
                            </ul>
                        </li>
                        <li><a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact', 1000)}>Contact Us</a></li>
                    </ul>
                </div>
                <a href="#hero" onClick={(e) => handleScrollToSection(e, '#hero', 1000)} className="btn btn-ghost text-xl">LiMAK</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#hero" onClick={(e) => handleScrollToSection(e, '#hero', 1000)}>Home</a></li>
                    <li>
                        <details>
                            <summary>Rooms</summary>
                            <ul className="">
                                <li><a href="#double" className="text-xs" onClick={(e) => handleScrollToSection(e, '#double', 1000)}>Double Bed</a></li>
                                <li><a href="#single" className="text-xs" onClick={(e) => handleScrollToSection(e, '#single', 1000)}>Single Bed</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact', 1000)}>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Booking</a>
            </div>
        </div>
    )
}

export default Navbar
