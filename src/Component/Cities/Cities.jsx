import React from 'react'
import './CitiesStyle.css'
import nature from './../../assets/e1.png'
import cty from './../../assets/e2.png'

const Cities = () => {
    return (
        <div className=' container-fluid citey '>
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
        </div>
    )
}

export default Cities





// const Cities = ({ bgImg, promo, desc, btns }) => {
//     return (
//         <div className='city d-flex  text-center  justify-content-center  align-items-center w-100'>
//             {bgImg.map((ele, i) => {
//                 return (
//                     <div className='oneChild ' key={i} style={{ backgroundImage: `url(${ele})` }}>


//                         <p>{promo}</p>
//                         {desc.map((elem, index) => {
//                             return (
//                                 <h1 >{elem}</h1>
//                             )
//                         })}
//                         <h1>{desc}</h1>
//                         <button>{btns}</button>

//                     </div>


//                 )
//             })}


//         </div>
//     )
// }

// export default Cities