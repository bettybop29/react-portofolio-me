import React from "react";
import './Portofolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'

const Portofolio = () =>{
    return (
        <div className="portofolio">
            {/* heading */}
            <span>Recent project</span>
            <span>Portofolio</span>
            {/* slider */}
            <Swiper
                spaceBetween={10}
                slidesPerView={3.5}
                grabCursor={true}
                className='portofolio-slider'
            
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>{" "}
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Portofolio