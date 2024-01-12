
import React from 'react'
import './CardsStyle.css'

import victor from './../../assets/Vector.svg'
const Cards = ({ Cart2 }) => {
    return (
        <div className='container  '>
            <div className="row   mx-auto   ">



                {Cart2.map((ele, ind) => {

                    return (

                        <div className="col" key={ind}>
                            <div className='imgcity'>
                                <img src={ele.imag} />
                                <div className='imgInfo d-flex  justify-content-between  align-items-center  '>
                                    <p className=' cardPara'>{ele.date}</p>
                                    <p className='cardPara'>{ele.People}</p>
                                </div>

                                <div className='head mt-3 '>
                                    <h1 className='h-rate'>{ele.country}</h1>
                                    <p className='p-rate  '>{ele.desc}</p>
                                    <div className='d-flex gap-4  '>
                                        <div>
                                            <p>{ele.price}</p>
                                        </div>
                                        <div className=' d-flex  gap-1 '>
                                            <div> <img src={victor} /></div>
                                            <div> <p>{ele.rating}</p></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                )



                }</div>




        </div>
    )
}

export default Cards