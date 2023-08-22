import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { useLocation } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import { motion } from 'framer-motion'
import logo from "../asset/logo.PNG"
import { ThemeSetting } from '../components'
import { links } from "../data"


const Navbar = () => {
    const [show, setShow] = useState(false)
    const [theme, setTheme] = useState(false)
    const { themeColor } = useTheme()
    const location = useLocation()
    const { pathname } = location
    return (
        <div className='overflow-x-hidden'>
            <nav className='flex flex-col items-center justify-center'>
                <div className='flex justify-between px-3 lg:px-0  py-5 lg:py-10 w-full lg:w-[60%]  '>
                    <div><img src={logo} alt='logo' /> </div>
                    <ul className='md:flex hidden capitalize  text-lg text-white items-center'>
                        {links.map((link, index) => {
                            return <li key={index + link.name}
                                style={{ color: (pathname === link.path) ? `${themeColor}` : "white" }}
                                className="mx-3"><Link to={link.path}>{link.name}</Link></li>
                        })}
                    </ul>
                    <div className='md:hidden' onClick={() => setShow(!show)}>
                        <FaBars size={35} color='white' />
                    </div>
                </div>
            </nav>
            <motion.ul
                initial={{ x: "100%" }}
                animate={show ? { x: 0 } : { x: "100%" }}
                transition={{ duration: 0.6 }}
                className='flex md:hidden items-end capitalize h-screen w-[40%] text-md text-white flex-col fixed top-20 z-40 right-0 bg-black py-10 px-5 '>
                {links.map((link, index) => {
                    return <li
                        key={index + link.name} className="my-2"
                        onClick={() => setShow(!show)}><Link
                            style={{ color: (pathname === link.path) ? `${themeColor}` : "white" }}
                            to={link.path}>{link.name}</Link></li>
                })}
            </motion.ul>
            <ThemeSetting theme={theme} setTheme={setTheme} />
        </div>
    )
}
export default Navbar


