import React from 'react'
import './CitiesStyle.css'
import nature from './../../assets/e1.png'
import cty from './../../assets/e2.png'

const Cities = () => {
    return (
        <div className='citey container-fluid   d-flex align-items-center w-100 '>
           
                <div className='fst text-white  d-flex  flex-column  align-items-center  justify-content-center w-50 ' style={{ backgroundImage: `url(${nature})` }}>
                    <p>promotion</p>
                    <h1 className='H1tit'>Explore Nature</h1>
                    <button className='btnNat bg-transparent text-white border-0'>View Packages</button>
                </div>

                <div className='fst  text-white  d-flex flex-column align-items-center  justify-content-center w-50 ' style={{ backgroundImage: `url(${cty})` }}>
                    <p>promotion</p>
                    <h1 className='H1tit'>Explore Cities</h1>
                    <button className='btnNat bg-transparent text-white border-0 '>View Packages</button>
                </div>
          
        </div>
    )
}

export default Cities




{/* <div className=' container-fluid  citey'>
<div className='row'>
    <div className='fst  col-lg-6 col-md-2  text-white  d-flex  flex-column  align-items-center  justify-content-center  ' style={{ backgroundImage: `url(${nature})` }}>
        <p>promotion</p>
        <h1 className='Volkhov'>Explore Nature</h1>
        <button className='btnNat bg-transparent text-white border-0'>View Packages</button>
    </div>

    <div className='fst col-lg-6  col-md-2  text-white  d-flex  flex-column  align-items-center  justify-content-center' style={{ backgroundImage: `url(${cty})` }}>
        <p>promotion</p>
        <h1 className='Volkhov'>Explore Cities</h1>
        <button className='btnNat bg-transparent text-white border-0 '>View Packages</button>
    </div>
</div>
</div> */}