import React from 'react'

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <div>
                <h6 className="footer-title">Bueng Aram Golf & Country Club</h6>
                <a className='link link-hover' href="#">(Daeho CC., Kalasin, Thailand.)</a>
                <a className='link link-hover' href="#">010 9295 8868</a>
            </div>
            <nav>
                <a className="link link-hover">Promotions</a>
                <a className="link link-hover">Golf Course Information</a>
                <a className="link link-hover">Our Resorts and Residences</a>
                <a className="link link-hover">Member's Area</a>
                <a className="link link-hover">Rules & Regulations for Customers </a>
            </nav>
            <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    )
}

export default Footer