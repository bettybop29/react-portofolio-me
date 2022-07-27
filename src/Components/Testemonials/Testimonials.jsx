import React from "react";
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";
import 'swiper/css/pagination'
import 'swiper/css'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
 
const Testimonials = () => {

    const clients = [
        {
            img:profilePic1,
            review:
            "Smart, adaptable, quick learn and fast response all that I know when I was working with him. He put many efforts to learn and adjust his capability to support his team in developing a Job Portal Application. He completely finished his work with his team and develop a Job Portal Application successfully. Good job, Gri!"
        },
        {
            img:profilePic2,
            review:
            "Good personality and full dedication"
        },
        {
            img:profilePic3,
            review:
            "Lorem ipsum asdasdakasdkjaslkdjlaasdasdasdasdasd"
        },
        {
            img:profilePic4,
            review:
            "Lorem ipsum asdasdakasdkjaslkdjlaasdasdasdasdasd"
        }
    ]


    return (
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span>Clients always get</span>
                <span> Expectional work </span>
                <span>For me...</span>
                <div className="blur t-blur1"
                style={{ background:"var(--purple)" }}></div>
                <div className="blur t-blur2"
                style={{ background:"skyblue" }}></div>
            </div>
            {/* slider */}

            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable: true}}
            >
                {clients.map((client, index)=>{
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonials">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>


        </div>    
    )
}
export default Testimonials