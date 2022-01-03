import React from 'react'
import { Link } from 'gatsby'
import { useState, useEffect } from 'react'
import './main.scss'

const LandingPage = () =>{
  let counter = 0
  const classes = ['background', 'background-2', 'background-3']

  const[image, setImage] = useState(classes[counter])

   const someImage =(state)=>{
     if(counter >= 3){
       counter = 0
     }
     if(state ==='next'){

     }else{
       counter--
     }
    counter++
    setImage(classes[counter])
  }
  useEffect(() => {
    const interval = setInterval(()=>{
      someImage('next')
    },10000)
    return () => {
      clearInterval(interval)
    }
  }, [])
    return(
<main>
    <div className={image}>
     <nav className='navigation'>
     <div className="logo">LOGO</div>
       <ul className='navigation__list'>
         <li className="navigation__listItem">
           <Link to="#" className="navigation__link">Poznaj Przestrzeń</Link>
         </li>
         <li className="navigation__listItem">
         <Link to="#" className="navigation__link">Oferta</Link>
         </li>
         <li className="navigation__listItem">
         <Link to="#" className="navigation__link">Lokalizacja</Link>
         </li>
         <li className="navigation__listItem">
         <Link to="#" className="navigation__link">Własne Biuro</Link>
         </li>
         <li className="navigation__listItem">
         <Link to="#" className="navigation__link">Kontakt</Link>
         </li>
       </ul>
       <div className="social-media"> 
          <span className='social-media__fb'></span>
          <span className='socialmedia__inst'></span>
       </div>
     </nav>
     <div className='middle'>
      <section className='main'>
        <h1 className="main__header">
          Firma
        </h1>
        <p className="main__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero?
        </p>
      </section>
      
      <section className="contactBox">
        <h2 className='contactBox__title'>Lorem ipsum dolor sit amet consectetur.</h2>
        <span className='contactBox__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quisquam.</span>
        <span className='contactBox__text--bold'>Zostaw kontakt zadzwonimy do Ciebie</span>
        <form className="contactBox__form">

          <input type="text" className="form__input" placeholder="imię i nazwisko"/>
          <input type="text" className="form__input" placeholder="Telefon"/>
          <input type="text" className="form__input" placeholder="Email"/>
          <input type="text" className="form__input" placeholder="lorem ipsum"/>
          <div>
            <input type="checkbox" name="" id="" />
            <span className="form__checkbox"></span>
            <span className="form__checkboxText">wyrażam zgode na przetwarzanie moich danych osobowych</span>
          </div>
          <div className="form__submit">
            <span className="form__submitText">Wyślij</span>
            </div>

        </form>
      </section>
      <div className="arrows">
         <div className="arrowLeft" onClick={()=>{someImage('next')}}></div>
         <div className="arrowRight" onClick={()=>{someImage('next')}}></div>
         <div className="progressBar"></div>
      </div>
    </div>
    </div>
   </main>
    )
}
export default LandingPage