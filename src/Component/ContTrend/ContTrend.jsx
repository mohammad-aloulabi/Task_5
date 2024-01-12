import React from 'react'
import './ContTrendStyle.css'


const ContTrend = (props) => {
    return (
        <>
            <div className='  head d-flex flex-column  justify-content-center  align-items-center '>
                <p className='pformat'>Trendy</p>
                <h1 className='hformat'>Our Trending Tour Packages</h1>
            </div>
            <div className=" secondContainere d-flex  flex-wrap gap-4  ">
                {props.children}

            </div>
        </>
    )
}

export default ContTrend