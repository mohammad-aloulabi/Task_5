import './FooterStyle.css'
import React from 'react'
import imgfooter from './../../assets/footer-bg.png'
import Travel from './../../assets/Travel.png'
import arrow from './../../assets/Arrow.svg'

import messenger from './../../assets/messenger.svg'
import twoo from './../../assets/twoo.svg'
import twitter from './../../assets/twitter.svg'
import linkedin from './../../assets/linkedin.svg'


const Footer = () => {
    return (
        <div className="container footformat  " style={{ backgroundImage: `url(${imgfooter})` }}>
            <div className="row d-flex justify-content-between align-items-center  mx-auto rowformat ">

                <div className="col-lg-3   ">
                    <div className='travelimg  '>
                        <div className='Travel position-relative'>
                            <img src={Travel} />
                            <div className='arrow  position-absolute '>
                                <img src={arrow} />
                            </div>
                        </div>
                    </div>
                    <p className='pformt py-5'>Travel helps companies manage payments easily.</p>
                    <div className='social d-flex gap-4    '>
                        <img src={messenger} />
                        <img src={twoo} />
                        <img src={twitter} />
                        <img src={linkedin} />

                    </div>

                </div>

                <div className="col-lg-3  ">
                    <h1>company</h1>
                    <ul className='list-unstyled space' >
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                    </ul>

                </div>

                <div className="col-lg-4 ">
                    <h1>Destinations</h1>
                    <ul className=' list-unstyled space ' >
                        <li>Maldives</li>
                        <li>Los Angelas</li>
                        <li>Las Vegas</li>
                        <li>Torronto</li>
                    </ul>
                </div>

            </div>

            <div className="row cpright  ">
                <p>Copyright @ Xpro 2023 All Rights Reserved.</p>
            </div>
        </div>





    )
}

export default Footer