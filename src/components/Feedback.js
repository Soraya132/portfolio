import { Title } from "../components"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { feedBacks } from "../data";

const Feedback = () => {
    return (
        <div>
            <Title
                text="Client Feedback"
                fontSize="text-2xl"
                fontWeight="font-[400]"
            />
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                className="mySwiper">
                {feedBacks.map((feedBack, index) => {
                    return (
                        <SwiperSlide key={feedBack.name + index}>
                            <div className="flex flex-col gap-10 cursor-e-resize">
                                <div className="border border-slate-500 py-12 px-8">
                                    {feedBack.feedBack}
                                </div>
                                <div className="flex flex-row gap-6 items-center">
                                    <div className="h-16 w-16 rounded-full">
                                        <img
                                            className="w-full h-full object-cover rounded-full"
                                            src={feedBack.img}
                                        />
                                    </div>
                                    <div className="flex flex-col ">
                                        <h5 className="text-xl font-[400]">
                                            {feedBack.name}
                                        </h5>
                                        <p className="text-md">{feedBack.job}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    )
}

export default Feedback
