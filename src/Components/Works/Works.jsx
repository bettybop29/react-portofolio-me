import React from "react";
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'





const Works = () => {
    return (
        <div className="works">
            <div className="awesome">
                <span>Works for all these</span>
                <span>Brands and clients</span>
                <spane>
                    Lorem ipsum dolor sit amet consectetur,
                    <br/>
                    earum cumque et hic, sapiente quaerat nisi!
                    <br/>
                    Lorem ipsum dolor sit amet consectetur,
                    <br/>
                    earum cumque et hic, sapiente quaerat nisi!
                </spane>
                
                    <button className="button s-button">Hire me</button>
                
                <div className="blur s-blur1" style={{ background:"#ABF1FF94" }}></div>
            </div>
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                {/* bg circle */}
                <div className="w-backCircle BlueCircle"></div>
                <div className="w-backCircle YellowCircle"></div>
            </div>
        </div>      
    )
}
export default Works