import React from 'react'
import Item from './Item'
import Title from './Title'

const Showcase = () =>{ 
    return(
    <div className='container' id='pageThree'>
        <div className="row">
            <div className="col-3">
                <Title/>
                <Item/>
            </div>
            <div className="col-3">
                <Item/>
                <Item/>
            </div>
            <div className="col-3">
                <Item/>
                <Item/>
            </div>
            <div className="col-3">
                <Item/>
                <Item/>
            </div>

        </div>
    </div>        

    )
}

export default Showcase