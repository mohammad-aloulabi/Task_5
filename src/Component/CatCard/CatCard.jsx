import React from 'react'
import './CatCardStyle.css'
const CatCard = ({ main }) => {
    return (

        <>
            {main.map((ele, i) => {
                return (
                    <div className='card border-0  text-center w-25 d-flex '  key={i}>
                        
                            <img src={ele.imgLogo} className=' mx-auto ' />
                            <h1 className='titl my-3 '>{ele.titles}</h1>
                            <p className=' lh-lg'>{ele.explaine}</p>
                        
                    </div>
                )
            })}

        </>


    )
}

export default CatCard;










{/* <div className='card text-center w-25  '>
<img src={imgLogo} className=' mx-auto '/>
<h1 className='titl my-2 '>{titles}</h1>
<p>{explaine}</p>
</div> */}