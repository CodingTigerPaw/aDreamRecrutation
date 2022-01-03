import React from 'react'
import Article from './article'

const News = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-3 mx-auto">
                    <h1>Aktualności</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Article/>
                </div>
                <div className="col-4">
                    <Article/>
                </div>
                <div className="col-4">
                    <Article/>
                </div>
            </div>
        </div>
    )
}

export default News