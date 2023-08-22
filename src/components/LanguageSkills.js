import { Title } from "../components"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTheme } from "../ThemeContext";
import { languageSkills } from "../data";

const LanguageSkills = () => {
    const { themeColor } = useTheme()
    return (
        <div>
            <Title
                text="Language Skills"
                fontSize="text-2xl"
                fontWeight="font-[400]"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-14 lg:gap-6">
                {languageSkills.map((language, index) => {
                    return (
                        <div className="flex flex-col gap-5 justify-center items-center"
                            key={index + language}
                        >
                            <CircularProgressbar
                                strokeWidth={3}
                                styles={{
                                    path: {
                                        stroke: `${themeColor}`,
                                    },
                                }}
                                value={language.percentage}
                                text={`${language.percentage}%`}
                            />
                            <div>{language.name}</div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default LanguageSkills
