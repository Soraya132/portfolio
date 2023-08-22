import AppWrap from "../wrapper/Wrapper"
import { Title } from "../components"
import { ContactInfo } from "../data"
import { motion } from "framer-motion"
import { useTheme } from "../ThemeContext"

export const pageVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.9 }
    }
}

const Contact = () => {
    const { themeColor } = useTheme()
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <motion.div
            variants={pageVariant}
            initial="hidden"
            animate="visible"
            className='grid  '>
            <Title text="Get in Touch" fontSize="text-4xl" fontWeight="font-[500]" />
            <section className='grid lg:grid-cols-2 mt-10 lg:gap-20 gap-5'>
                <div className='grid gap-5'>
                    {ContactInfo.map((item, index) => {
                        return (
                            <div className="get__in_touch" key={index + item.info}>
                                <div className={`text-${themeColor}`}>{item.icon}</div>
                                <a href={item.page} className={`hover:text-${themeColor} hover:duration-500`}>{item.info}</a>
                            </div>
                        )
                    })}
                </div>
                <form className="grid  gap-5 " onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-2 gap-5 ">
                        <div  ><input type="text" className="get__in_touch " placeholder="name" /></div>
                        <div ><input type="text" className="get__in_touch" placeholder="email" /></div>
                    </div>
                    <textarea className="get__in_touch resize-none lg:h-32" placeholder="message" />
                    <div>
                        <button className={`button bg-${themeColor} text-white w-[40%]`}>submit</button>
                    </div>
                </form>
            </section>
        </motion.div>
    )
}

export default AppWrap(Contact)
