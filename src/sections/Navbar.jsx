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
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-base-300 w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="mx-2 flex-1 px-2">Resort's Name</div>
                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                <li><a href='#promotions'>Promotions</a></li>
                                <li><a href='#golf'>Golf Course Information</a></li>
                                <li><a href='#resorts'>Our Resorts and Residences</a></li>
                                <li><a>Members’ Area </a></li>
                                <li ><a href='#forum'>Forum for all customers</a></li>
                                <li className="hidden xl:block"><a>Pricing Policy</a></li>
                                <li className="hidden xl:block"><a>Rules & Regulations for Customers</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a href='#promotions'>Promotions</a></li>
                        <li><a>Pricing Policy</a></li>
                        <li><a href='#golf'>Golf Course Information</a></li>
                        <li><a href='#resorts'>Our Resorts and Residences</a></li>
                        <li><a>Rules & Regulations for Customers</a></li>
                        <li><a>Members’ Area </a></li>
                        <li><a href='#forum'>Forum for all customers</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
