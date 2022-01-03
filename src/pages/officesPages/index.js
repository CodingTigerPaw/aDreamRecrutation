import React from 'react'
import OfficeBox from './components/officeBox'

import './main.scss'

const Office = () =>{
return(
    <main className="Office">
        <div className="container">
            <div className="row">
                <div className="col">
                    <OfficeBox></OfficeBox>
                    <OfficeBox></OfficeBox>
                </div>
                <div className="col">
                    <OfficeBox></OfficeBox>
                    <OfficeBox></OfficeBox>
                </div>
            </div>
        </div>

    </main>
)
}

export default Office