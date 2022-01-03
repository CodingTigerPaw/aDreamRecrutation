import React from 'react'
import '../main.scss'
import img from './shutterstock_1677941275@2x.png'

const OfficeBox = () =>{
    return(
         <div  className="info my-5">
            <img src={img} className="info__background"></img>
            <div className="info__whiteBox">
                <div className="info__yellowBox"></div>
                <div className="info__title">Lorem</div>
                <div className="info__textBox">Lorem, ipsum dolor.</div>
            </div>
            <div className="info__price"></div>
            <div className="info__arrow">
            </div>
        </div>
    )
}

export default OfficeBox