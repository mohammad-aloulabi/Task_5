import React from "react";
import "./PromotionStyle.css";


const Promotion = ({ title, desc, brief, button, firstPic, SecondPic, ThirdPic }) => {
  return (

    // <div className="  promofather d-flex  justify-content-between  align-items-center flex-wrap " >
    <div className="  promofather  d-flex   justify-content-around  align-items-center flex-wrap  " >

      <div className="firstchild">
        <p className="ptitle">{title}</p>
        <h1 className="provide">{desc}</h1>
        <p className="promodescrip">{brief}</p>
        <button className="btnpackage">{button}</button>
      </div>


      <div className="secondchild" style={{ backgroundImage: `url(${SecondPic})` }}>
        <div className="circle position-relative ">
          <img src={ThirdPic} />
          <div className="insid-eimg position-absolute ">
            <img src={firstPic} />
          </div>

        </div>

      </div>


    </div>
  )
};

export default Promotion;


