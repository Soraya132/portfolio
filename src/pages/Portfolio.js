
import AppWrap from "../wrapper/Wrapper";
import { motion } from "framer-motion";
import { pageVariant } from "./Contact";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Modal, ModalDetail, Title } from "../components"
import imag1 from "../asset/computer.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { images } from "../data";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalDetail, setShowModalDetail] = useState(false)
    const [data, setData] = useState({
        image: "",
        header: "",
        brand: "",
        text: "",
        link: "",
        detail: ""
    })
    const handleClick = (info, condition) => {
        condition === "detail" ? setShowModal(!showModal) : setShowModalDetail(!showModalDetail)
        setData({ header: info.name, detail: info.detail, text: info.explanation, image: info.image })
    }
    return (
        <motion.div
            variants={pageVariant}
            initial="hidden"
            animate="visible"
        >
            <Title text="Creative Portfolio" fontSize="text-4xl" fontWeight="font-[500]" />
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
                {images.map((image, index) => {
                    return (
                        <SwiperSlide key={index + image} className="rounded-lg relative h-[250px] overflow-x-hidden overflow-y-hidden"
                            onClick={() => handleClick(image, image.detail)}>
                            <div className="w-full h-[250px]">
                                <motion.div
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ backgroundSize: "cover", background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('./asset/${image.background}') no-repeat fixed center/cover` }}
                                    className="w-full h-full rounded-lg " >
                                    <motion.div
                                        initial={{ y: 110 }}
                                        whileHover={{ y: 0 }}
                                        className="w-full h-full pt-36 pl-4">
                                        <div className=" w-40 h-16 bg-white rounded-lg px-3 py-4 flex flex-col justify-center">
                                            <h5 className="text-black text-lg">{image.name}</h5>
                                            <p className="text-gray">{image.detail}</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <Modal setShowProfile={setShowModal} showProfile={showModal}>
                <div className="flex flex-col bg-darkGray rounded-lg lg:w-[55%] px-6 py-14 md:p-12 w-[90%] overflow-y-scroll no-scrollbar lg:h-[90%] mb-10 ">
                    <div className="w-full h-[30px] rounded-2xl">
                        <img src={data.image} alt={data.image} className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div>
                        <h2 className="pt-5 text-2xl font-[500]">{data.header}</h2>
                        <h5 className="pt-1 pb-4 text-slate-300 text-lg">{data.detail}</h5>
                        <p className="text-slate-300 text-md">{data.text}</p>
                    </div>
                </div>
            </Modal>
            <ModalDetail
                setShowProfile={setShowModalDetail} showProfile={showModalDetail}>
                <div className="flex  lg:w-[40%] w-[90%] ">
                    <div className="w-full h-full ">
                        {data.detail === "image" && <img src={data.image} alt={data.image} className="w-full h-full object-cover" />}
                    </div>
                </div>
            </ModalDetail>
        </motion.div>
    )
}
export default AppWrap(Portfolio)

