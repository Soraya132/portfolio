import { useTheme } from "../ThemeContext";
import { ContactInfo } from "../data";


const ContactInformation = () => {
    const { themeColor } = useTheme()
    return (
        <div>
            <div className="grid gap-3 w-full">
                {ContactInfo.map((item, index) => {
                    return (
                        <div
                            className="about__get__in_touch border-b border-dashed pb-1"
                            key={index + item.info}>
                            <div className={`text-${themeColor}`}>{item.icon}</div>
                            <a
                                href={item.page}
                                className={` hover:text-${themeColor}
                                               text-lg lg:text-sm hover:duration-500 2xl:text-xl`}>
                                {item.info}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ContactInformation
