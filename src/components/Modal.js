import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Modal = ({ children, setShowProfile, showProfile }) => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={
                showProfile ? { display: "flex", opacity: 1 } : { opcaity: 0, scale: 0 }
            }
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 left-0 bottom-0
                         bg-black text-white w-full flex flex-col items-center pt-10 2xl:pt-20 z-50 overflow-y-hidden">
            {children}
            <div className="absolute lg:top-10 lg:right-[18%] top-[9%] right-[7%] z-50">
                <button
                    onClick={() => setShowProfile(!showProfile)}
                    className="w-10 h-10 rounded-lg border flex justify-center items-center ml-3 hover:rounded-full cursor-pointer bg-darkGray">
                    <FaTimes />
                </button>
            </div>
        </motion.section>
    );
};

export default Modal;
