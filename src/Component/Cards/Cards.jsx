
import React from 'react'
import './CardsStyle.css'

import victor from './../../assets/Vector.svg'
const Cards = ({ Cart2 }) => {
    return (

        <div className="row mx-auto justify-content-center   gap-2  main ">

            {Cart2.map((ele, ind) => {

                return (

                    <div className=" col-lg-3 col-md-6  cartFormat  " key={ind}>
                        <div className='headerpart d-flex  flex-column '>
                            <div className='imgHead'>
                                <img className='imgEdit w-100 ' src={ele.imag} />
                            </div>
                            <div className='date-people d-flex  justify-content-between  '>
                                <p className=' carddetails'>{ele.date}</p>
                                <p className='carddetails'>{ele.People}</p>
                            </div>
                        </div>

                        <div className='secondPart w-100  p-2 '>
                            <h1 className='H1Name'>{ele.country}</h1>
                            <p className='P-des'>{ele.desc}</p>
                        </div>
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
                )
            }

            )
            }</div>

    )
}

export default Cards








