import * as React from "react"

// styles

import LandingPage from "./landingPages"
import Office from "./officesPages"
import Showcase from "./showcase"
import OwnOffice from "./ownOffice.js"
import News from "./news"
import Gallery from "./gallery"
import Footer from "./footer"

// markup
const IndexPage = () => {
  return (
    <div>
    
   <LandingPage/>
   <Office/>
   <Showcase/>
   <OwnOffice/>
   <News/>
   <Gallery/>
   <Footer/>

    </div>

  )
}

export default IndexPage
