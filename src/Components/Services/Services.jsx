import React from "react";
import './Services.css'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from "../Cards/Cards";
import HeartEmoji from '../../img/heartemoji.png'
import Resume from './CV_Fritz agricia saduk_2022.pdf'

const Services = () => {
    return (
        <div className="services">
            {/* left */}
            <div className="awesome">
                <span>My awasome</span>
                <span>services</span>
                <spane>
                    Lorem ipsum dolor sit amet consectetur,
                    voluptatum dolores illum,
                    <br/>
                    earum cumque et hic, sapiente quaerat nisi!
                </spane>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background:"#ABF1FF94" }}></div>
            </div>
            {/* right */}
            {/* first card */}
            <div className="cards" style={{ left:"7rem" }}>
                <Card
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={"Figma, Photoshop, Adobe XD"}   
                />
            </div>
            {/* second card */}
            <div className="cards" style={{ top:"12rem", left:"-12rem" }}>
                <Card
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={'HTML, Javascript, ReactJS, VueJS'}
                />
            </div>
            <div className="cards" style={{ top:"19rem", left:"5rem" }}>
                <Card
                    emoji={Humble}
                    heading={'IT Infrastructure'}
                    detail={'SQL Server, Netbackup, Linux'}
                />
            </div>
            <div className="blur s-blur2" style={{ background:"var(--purple)" }}></div>
        </div>

    )

}
export default Services