import React, {useState} from 'react'


const LightBoxStyling = {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100vh',
    width: '100vw',
    backgroudColor: 'rgba(0,0,0,0.7)'
    

}
const LightBox = ({children, src ,alt, Wrapper='div'}) =>{
    const [isOpen, setOpen] = useState(false)

    const toggleIsOpen = () =>{
        setOpen(!isOpen)
    }

    return(
        <Wrapper onClick={toggleIsOpen} className=''>
                {children}
                {isOpen ?
                    <div onClick={toggleIsOpen} style={LightBoxStyling} >
                        <img src={src} alt={alt} style={{width: '100%', marginLeft: 'auto', marginRight:'auto'}}/>
                    </div> 
                    : null}
        </Wrapper>
    )
}

export default LightBox