import React from 'react'
import './styles.scss'

const Footer = () =>{
    return(
        <div className='position-relative'>
            <div className="container footer ">
                <div className="row h-25">
                    <div className="col">
                        <div className="logo">LOGO</div>
                    </div>  
                    <div className='d-flex flex-row justify-content-around '> 
                        <ul className="d-flex flex-column list-unstyled smallText">
                            <li className='mb-3'>
                                <p>ul Towarowa 5/6</p>
                                <p>31-000 Kraków</p>
                            </li>
                            <li>
                                <p>+48 999 999 999</p>
                                <p>email@email.com</p>
                            </li>    
                        </ul>  
                        <ul className="d-flex flex-column list-unstyled flex-wrap smallText">
                            <li>strona główna</li>
                            <li>Poznaj przestrzeń</li> 
                            <li>Oferta</li>
                        </ul>
                        <ul className="d-flex flex-column list-unstyled flex-wrap smallText">
                            <li>Lokalizacja</li>
                            <li>Własne Biuro</li>
                            <li>Kontakt</li>
                        </ul>
                    </div>           
                    </div>
                </div>
                <div className="mark position-absolute"></div>
            </div>            
    )
}


export default Footer