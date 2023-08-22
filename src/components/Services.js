import { useTheme } from "../ThemeContext";
import { Title } from "../components"
import { skills } from "../data";
import { BiSolidRightArrow } from "react-icons/bi"


const Services = () => {
    const { themeColor } = useTheme()
    return (
        <div>
            <Title
                text="Quality Service"
                fontSize="text-2xl"
                fontWeight="font-[400]"
            />
            <ul className="py-1">
                {skills.map((skill, index) => {
                    return (
                        <li key={index + skill} className="py-1 flex items-center gap-3">
                            <span><BiSolidRightArrow className={`text-${themeColor}`} /></span><span>{skill}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Services
