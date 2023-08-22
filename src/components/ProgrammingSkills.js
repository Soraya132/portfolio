import { useTheme } from "../ThemeContext"
import { Title } from "../components"
import { programmingSkills } from "../data"
const ProgrammingSkills = () => {
    const { themeColor } = useTheme()
    return (
        <div>
            <Title
                text="Programming Skills"
                fontSize="text-2xl"
                fontWeight="font-[400]"
            />
            <div className="flex flex-col gap-5">
                {programmingSkills.map((skill, index) => {
                    return (
                        <div key={index + skill}>
                            <div className="flex justify-between pb-3">
                                <p>{skill.name}</p>
                                <p>{skill.percentage}</p>
                            </div>
                            <div className="w-full h-[3px] bg-slate-500">
                                <div className={`h-full w-[${skill.percentage}] bg-${themeColor}`}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProgrammingSkills
