import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const ModalDetail = ({ children, setShowProfile, showProfile }) => {
    const handleClick = () => {
        setShowProfile(!showProfile);
    };
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={
                showProfile ? { display: "flex", opacity: 1 } : { opcaity: 0, scale: 0 }
            }
            transition={{ duration: 0.3 }}
            onClick={() => handleClick()}
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            className="fixed top-0 right-0 left-0 bottom-0
                  text-white w-full flex flex-col items-center pt-10 2xl:pt-20 z-50 
                  justify-center overflow-y-hidden">
            {children}
        </motion.section>
    );
};

export default ModalDetail;
