import React from 'react'
import './ContainerStyle.css'


const Container = ({ title, desc, brief, image }) => {
  return (
    
    <div className="promofather d-flex  justify-content-between  align-items-center flex-wrap " >
      <div className='stamp'>
        <img src={image} />

      </div>
      <div className="firstchild  ">
        <p className="ptitle">{title}</p>
        <h1 className="provide">{desc}</h1>
        <p className="promodescrip">{brief}</p>

        <div className='percent d-flex gap-5 mt-5 '>

          <div className='percentOne d-flex  flex-column  '>
            <h1>78%</h1>
            <p>Vacations</p>

          </div>
          <div className='percentTow d-flex  flex-column '>
            <h1>55%</h1>
            <p>Honeymoon</p>
          </div>
        </div>
      </div>






    </div>
  )
}

export default Container