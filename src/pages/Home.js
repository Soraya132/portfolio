
import { Link } from 'react-router-dom'
import AppWrap from '../wrapper/Wrapper'
import { useTheme } from '../ThemeContext'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import { pageVariant } from './Contact';



const Home = () => {
    const { themeColor } = useTheme()
    return (
        <motion.div
            variants={pageVariant}
            initial="hidden"
            animate="visible"
            className='flex z-40 justify-center items-center flex-col h-72 gap-7 text-white text-center overflow-y-hidden'>

            <h1 className='text-5xl sm:text-6xl font-[500]'>soraya <span
                className={`text-${themeColor} `}>haidary</span></h1>
            <div className='text-2xl flex gap-2'>Creative<span>
                <div>
                    <TypeAnimation
                        sequence={["Freelancer", "Developer"]}
                        wrapper="span"
                        speed={0}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
            </span>
            </div>
            <button className={`button bg-${themeColor}`}><Link to="/contact">Get in Touch</Link></button>
        </motion.div>
    )
}

export default AppWrap(Home)
