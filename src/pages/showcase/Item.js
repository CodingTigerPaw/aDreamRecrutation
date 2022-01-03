import React from "react";
import img1 from './Group598.png'

const Item = () =>{
    return(
        <div className='py-5 px-2'>
            <img className="list__image"src={img1} alt=""/>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}

export default Item