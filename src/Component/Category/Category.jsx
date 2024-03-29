import React from 'react'

import './CategoryStyle.css'

const Category = (props) => {
    return (
        <>
            <div className='heading container  d-flex flex-column  justify-content-center  align-items-center  '>
                <p className='pcolor'>Category</p>
                <h1 className='hcolor'>We Offer Best Services</h1>
            </div>
            <div className='fistrContainer d-flex flex-wrap mt-5'>
                {props.children}
            </div>
        </>

    )
}

export default Category