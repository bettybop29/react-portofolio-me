import React from "react";
import './Navbar.css'
import Toogle from "../Toogle/Toogle";
import { Link } from 'react-scroll'


const Navbar = () =>    {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Fritz Agricia</div>
                <Toogle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass' className="link">
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} className="link">
                            <li>Services</li>   
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} className="link">
                            <li>Experience</li>   
                        </Link>
                        <Link spy={true} to='Portofolio' smooth={true} className="link">
                            <li>Portfolio</li>                      
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true} className="link">
                            <li>Testimonials</li>   
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar;
