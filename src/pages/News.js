
import AppWrap from "../wrapper/Wrapper";
import { motion } from "framer-motion";
import { pageVariant } from "./Contact";
import { Title, NewsSwiper, Modal } from "../components";
import React, { useRef, useState } from 'react';



const News = () => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({
        image: "",
        header: "",
        brand: "",
        text: ""
    })
    const handleClick = (info) => {
        setShowModal(!showModal)
        setData({ header: info.name, brand: info.detail, text: info.explanation, image: info.image })
    }
    return (
        <motion.div
            variants={pageVariant}
            initial="hidden"
            animate="visible"
        >
            <Title text="Latest News" fontSize="text-4xl" fontWeight="font-[500]" />
            <NewsSwiper handleClick={handleClick} />
            <Modal setShowProfile={setShowModal} showProfile={showModal}>
                <div className="news__modal-container">
                    <div className="w-full h-[30px] rounded-2xl">
                        <img src={data.image} alt={data.image} className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div>
                        <h2 className="pt-5 text-2xl font-[500]">{data.header}</h2>
                        <h5 className="pt-1 pb-4 text-slate-300 text-lg">{data.brand}</h5>
                        <p className="text-slate-300 text-md">{data.text}</p>
                    </div>
                </div>
            </Modal>
        </motion.div>
    )

};
export default AppWrap(News);


