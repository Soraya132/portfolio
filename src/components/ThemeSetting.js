import { PiCursorClickFill } from "react-icons/pi"
import { FiSettings } from "react-icons/fi"
import { motion } from "framer-motion"
import { useTheme } from "../ThemeContext"
import { Cursor } from "react-custom-cursors";
import "react-custom-cursors/dist/index.css";

const ThemeSetting = ({ theme, setTheme }) => {
    const { colors, handleChange, animatedCursor, setAnimatedCursor, themeColor } = useTheme()
    return (
        <motion.button
            initial={{ x: "170px" }}
            animate={theme ? { x: 0 } : { x: "170px" }}
            transition={{
                duration: 0.6,
            }}
            className='flex flex-row fixed z-20 right-0'>
            <div onClick={() => setTheme(!theme)} className='bg-darkGray h-12 p-1 flex justify-center items-center'> <FiSettings size={30} color="white" className='animate-spin-slow duration-1000 ease-linear' /></div>
            <div>
                <div className='bg-darkGray py-3 px-4 text-white'>
                    <h2 className='border-b border-dashed py-3'>Unlimited Colors</h2>
                    <ul className='grid grid-cols-4  gap-2  py-3'>
                        {colors.map((color, index) => {
                            return (
                                <li key={index + color} className={`w-7 h-7 cursor-pointer rounded-full bg-${color} `} onClick={() => handleChange(color)}></li>
                            )
                        })}
                    </ul>
                    <h2 className='border-b border-dashed py-3'>Magic cursor</h2>
                    <ul className='flex  items-center gap-8 py-5 cursor-pointer'>
                        <li
                            onClick={() => setAnimatedCursor(<Cursor
                                animation="none"
                                color={themeColor}
                                dotColor={themeColor}
                                hasCursor
                                hasDot
                                hoveringAnimation="magnify"
                                shape="round"
                                size="xl"
                                speed="fast"
                            />)}
                            className='w-10 h-10 rounded-full border border-white flex justify-center items-center '><div className='w-1 h-1 rounded-full bg-white'></div></li>
                        <li onClick={() => setAnimatedCursor(<Cursor
                            animation="beat"
                            color="transparent"
                            hoveringAnimation="magnify"
                            shape="round"
                            size="xl"
                            speed="fast"
                        />)}><PiCursorClickFill size={30} /></li>
                    </ul>
                </div>
            </div>
        </motion.button>
    )
}

export default ThemeSetting
