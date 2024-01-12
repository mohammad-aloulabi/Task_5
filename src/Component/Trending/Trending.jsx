import React from 'react'
import './TrendingStyle.css'




const Trending = ({cart,pargraph,btns}) => {
    
    
    return (
        <>

            
            {cart.map((ele, ind) => {
    return(


        <div className='father bg'  key={ind}>

            <div className='pctposi'>
                <img src={ele.imgcard} className='bigpic' />
                <div className='white position-relative '>
                    <img src={ele.secondpic} className='smallpic position-absolute ' />
                </div>
            </div>

            <div className=' d-flex  justify-content-around   align-items-center gap-5  '>

                <div className=' pl-4  ' > <span className='days'><i id='calend' className={ele.icontow} style={{ color: "#7d7d7d", }} ></i>{ele.icondescr}</span></div>
                <div > <span className='days '><i id='calend' className={ele.iconthird} style={{ color: "#7d7d7d", }} ></i>{ele.icondescr2}</span></div>

            </div>
            <p className='catone'></p>

            <div className=' d-flex  justify-content-between   align-items-center px-4'>
                <h1 className='country'>{ele.titleCount}</h1>
                

                <div className='stars d-flex'>
                    <i className={ele.iconOne} style={{ color: "#ffba0a", }}></i> <i className={ele.iconOne} style={{ color: "#ffba0a", }}></i>
                    <i className={ele.iconOne} style={{ color: "#ffba0a", }}></i><i className={ele.iconOne} style={{ color: "#ffba0a", }}></i><i className={ele.iconOne} style={{ color: "#ffba0a", }}></i>
                </div>
            </div>

            <p className='px-3 pargraph'>{pargraph}</p>

            <button className='mx-3 btns d-flex  align-items-center  justify-content-center  border-0 '>{btns}</button>
        </div >
    )        
})}
        </>
    )
}

export default Trending










