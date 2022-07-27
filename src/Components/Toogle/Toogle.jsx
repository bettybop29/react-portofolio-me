import React from "react";
import './Toogle.css'
import { themeContext } from "../../Context";
import { useContext } from "react";


import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'

const Toogle = () => {
    const handleClick = () =>{
        theme.dispatch({type:'toogle'})
    }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode

    return (
        <div className="toggle">
            <Moon/> 
            <Sun/>
            <div className="t-button"
            onClick={handleClick} 
            style={darkMode? {left:'2px'}: {right:'2px'}}>

            </div>
        </div>
    )
}
export default Toogle