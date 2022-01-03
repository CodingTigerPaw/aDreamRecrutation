import React from 'react'
import image1 from './shutterstock_763511722.png'

const Article = () =>{
return(
    <div className="container">
        <div className="row">
            <div className="col">
                <img src={image1} className="img-thumbnail" alt="" />
                <span style={{fontSize: '0.8rem'}}>10.10.2021</span>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam quis sapiente!</h3>
                <a href="" style={{fontSize: '0.8rem'}}>wiecej</a>
            </div>
        </div>
    </div>
)
}

export default Article