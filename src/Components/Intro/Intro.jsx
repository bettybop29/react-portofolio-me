import React from "react";
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy2 from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";

import { themeContext } from "../../Context";
import { useContext } from "react";

import { motion } from "framer-motion";

const Intro = () => {
    const transition = {ease: "easeInOut", duration : 2, type:'spring'}
    // const animate = { scale: [1, 1, 1.5, 1] }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white' : ''}}>Hi, I am</span>
                    <span>Fritz Agricia</span>
                    <span>Frontend Developer with high level off 
                        experience in web designing and development, 
                        producting the quality work</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a target="_blank" rel="noreferrer" href="https://github.com/bettybop29">
                        <img src={Github} alt="" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fritz-agricia/">
                        <img src={Linkedin} alt="" />  
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fritz-agricia/">
                        <img src={Instagram} alt="" />
                    </a>
                    
                </div>


            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy2} alt="" />
                <motion.img
                    className="floating-div" 
                    initial={{left:'-36%'}}
                    whileInView={{left:'-24%'}}
                    transition={transition}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={glassesimoji} 
                    alt="" />
                <motion.div
                    className="floating-div" 
                    initial={{top:"-4%", left:"74%"}}
                    whileInView={{left:'23rem'}}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={transition}
                    style={{top:'-4%', left:'68%', color: darkMode? 'black' : '' }}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                </motion.div>
                <motion.div
                    className="floating-div" 
                    initial={{top:"18rem", left:"9rem"}}
                    whileInView={{left:'-2rem'}}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={transition}
                    style={{top:'18rem', left:'0%', color: darkMode? 'black' : '' }}>
                    <FloatingDiv image={thumbup} txt1='Best design' txt2='Award'/>
                </motion.div>
                <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
                <div className="blur"
                style={{
                    background:'#C1F5FF',
                    top:'17rem',
                    width:'21rem',
                    height:'11rem'
                }}
                ></div>
            </div>
        </div>
    )
}
export default Intro