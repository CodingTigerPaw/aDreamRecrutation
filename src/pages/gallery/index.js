import React from 'react'

import img1 from './shutterstock_579651031.png'
import LightBox from './lightBox'

const Gallery = () =>{
    return(
        <div className="container">
            <div className="row" style={{height: '100vh'}}>
                <div className="col-3 h-100" >
                        <LightBox src={img1} >
                            <img className='w-100'style={{cursor:'pointer', height:'100vh'}} src={img1} alt="" />
                        </LightBox>
                </div>
                <div className="col-5">
                        <LightBox src={img1}>
                            <img src={img1} style={{cursor: 'pointer'}}className='w-100 mb-4' alt="" />
                        </LightBox>
                        <LightBox src={img1}>
                            <img src={img1} className='w-100' alt="" />
                        </LightBox>
                </div>
                <div className="col-4">
                        <LightBox src={img1}>
                             <img src={img1} className='w-100' style={{height: '100vh'}} alt="" />
                        </LightBox>
                </div>
            </div>
            {/** lightbox*/}
        </div>
    )
}

export default Gallery 