import React from "react";
import './Footer.css'
import Wave from '../../img/wave.png'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'

import { themeContext } from "../../Context";
import { useContext } from "react";



const Footer = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode

    return (
        <div className="footer">
            <img src={Wave} alt="" style={{width:'100%'}} />
            <div className="f-content">
                <span style={{color: darkMode? 'black' : ''}}>Fritzagricia.as@gmail.com</span>
                <div className="f-icons">
                    <Insta color='white' size='3rem' />
                    <Facebook color='white' size='3rem' />
                    <Github color='white' size='3rem' />
                </div>
                
            </div>
            
        </div>
    )
}
export default Footer