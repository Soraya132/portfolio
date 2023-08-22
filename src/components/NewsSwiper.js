import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { newses } from "../data";
import { useTheme } from '../ThemeContext';

const NewsSwiper = ({ handleClick }) => {
    const { themeColor } = useTheme()
    return (
        <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            spaceBetween={40}
            keyboard={{
                enabled: true,
            }}
            breakpoints={{
                769: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                1000: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
            }}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
        >
            {newses.map((news, index) => {
                return (
                    <SwiperSlide
                        key={index + news + 1}
                        className="bg-slate-800 flex flex-col rounded-lg  ">
                        <div
                            onClick={() => handleClick(news)}
                            className="h-[250px] md:h-[300px] lg:h-[150px] overflow-y-hidden overflow-x-hidden cursor-pointer w-full">
                            <motion.img
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                src={news.image}
                                alt={news.image}
                                className="w-full h-full object-cover rounded-lg rounded-br-none rounded-bl-none opacity-50"
                            />
                        </div>
                        <div className="px-3 py-4 flex flex-col justify-center">
                            <h5 onClick={() => handleClick(news)} className={`text-white text-lg cursor-pointer text-left hover:text-gray  hover:duration-300`}>
                                {news.name}
                            </h5>
                            <p onClick={() => handleClick(news)} className={`text-slate-300 cursor-pointer text-left hover:text-gray hover:duration-300`}>
                                {news.detail}
                            </p>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    )
}
export default NewsSwiper
